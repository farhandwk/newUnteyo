import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import light_2 from "../assets/light-2.png"

const BackgroundScroll = ({ targetRef }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=768)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [1 , 0.6, 0.4, 0]);

  return (
    <div className="sticky top-0 h-0 -z-10">
      <div className="hide-scrollbar absolute top-[0vh] left-0 w-full h-screen overflow-x-hidden">
        {/* <motion.div className='w-[250px] h-[250px] absolute top-[50vh] right-[-60vw] rounded-[200px] z-[1]
        lg:right-[-18vw] lg:w-[400px] lg:h-[500px]
        '
          style={{
            opacity: opacity3,
            background: 'radial-gradient( circle at 50% 50%, rgba(255, 69, 0, 1) 40%, rgba(255, 165, 0, 1) 60%)',
            filter: ` ${isMobile ? "blur(150px)" : "blur(200px)"} `,
          }}
        /> */}
        <motion.img src={light_2} className='w-auto h-[1000px] absolute top-[10vh] left-[50vw] md:h-[2000px] lg:h-[1000px] lg:left-[70vw] lg:top-[15vh]'
        style={{
          opacity: opacity3
        }}></motion.img>
      </div>
    </div>
  );
};

export default BackgroundScroll;