// src/components/BackgroundScroll.jsx

// 1. Kembalikan impor useState & useEffect
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundScroll = ({ targetRef }) => {
  // 2. Logika isScrolled Anda kita kembalikan
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=768)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      setIsScrolled(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logika Framer Motion tetap ada untuk semua cahaya
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [1 , 0.6, 0.4, 0]);

  return (
    <div className="sticky top-0 h-0 -z-10">
      <div className="hide-scrollbar absolute top-[0vh] left-0 w-full h-screen overflow-x-hidden">
        
        === CAHAYA 1 (Hanya Framer Motion) ===
        {/* <motion.div className={`w-[150px] h-[250px] absolute left-[-18vw] rounded-[10vw] z-[1] ${isScrolled ? "top-[30vh]" : "top-[50vh]"}
        lg:left-[-5vw] lg:w-[300px] lg:h-[400px]
        `}
          style={{
            background: 'radial-gradient( circle at 40% 55%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 255, 0.8) 80%)',
            filter: 'blur(80px)',
            transition: 'top 0.4s ease-in-out',
            opacity:opacity3
          }}
        /> */}

        {/* === CAHAYA 2 (Logika Gabungan) === */}
        {/* <motion.div className={`w-[150px] h-[250px] absolute left-[-18vw] rounded-[10vw] z-[1] ${isScrolled ? "top-[30vh]" : "top-[50vh]"}
        lg:left-[-5vw] lg:w-[300px] lg:h-[400px]
        `}
          style={{
            y: y2, 
            background: 'radial-gradient( circle at 60% 70%, rgba(255, 255, 255, 1) 20%, rgba(255, 69, 0, 1) 80%)',
            filter: 'blur(80px)',
            transition: 'top 0.4s ease-in-out', // Tambahkan transisi untuk 'top'
            opacity: opacity3
          }}
        /> */}

        {/* === CAHAYA 3 (Hanya Framer Motion) === */}
        <motion.div className='w-[250px] h-[250px] absolute top-[50vh] right-[-60vw] rounded-[200px] z-[1]
        lg:right-[-18vw] lg:w-[400px] lg:h-[500px]
        '
          style={{
            opacity: opacity3,
            background: 'radial-gradient( circle at 50% 50%, rgba(255, 69, 0, 1) 40%, rgba(255, 165, 0, 1) 60%)',
            filter: ` ${isMobile ? "blur(150px)" : "blur(200px)"} `,
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundScroll;