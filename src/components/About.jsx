// src/components/About.jsx
import React, { useRef } from 'react';
// 1. Impor hook dan komponen yang diperlukan dari framer-motion
import { motion, useScroll, useTransform } from 'framer-motion';
import Laptop from '../assets/laptopHal1.png';

function About() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4], 
    [0, 1]      
  );

  return (
    <section 
      ref={targetRef}
      className="w-[100vw] h-auto p-12 pt-36 flex flex-col gap-10
       lg:pt-48 lg:pl-[15%]
      "
    >
      <div className="text-2xl text-white font-[helvetica]
      lg:text-4xl w-full
      ">
        <h2><strong>What is Unteyo Journey?</strong></h2>
      </div>
      <motion.div className="flex flex-col gap-5
      lg:flex-row items-start justify-start
      " style={{ opacity }}>
        <p className="text-sm text-white font-[helvetica] mt-[-8%] relative
        lg:mt-[0] lg:text-xl lg:w-[60%]
        ">
          Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.
          <br/>
          Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.
        </p>
        <img src={Laptop} className="w-56 self-end z-[2] relative lg:w-84" alt="Laptop" />
      </motion.div>
      <button className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 pb-4 rounded-full hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto
      lg:w-96
      ">
                    Get to Know About Us
                </button>
    </section>
  );
}

export default About;