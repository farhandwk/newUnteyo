import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Laptop from '../assets/laptopHal1.png';

function About() {

const AnimatedSection = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, amount: 0.3 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='w-full h-auto pt-0 flex flex-col items-center justify-center p-12 gap-2 lg:pl-[15%]'
  >
    {children}
  </motion.section>
);

  return (
    <AnimatedSection>
      <div className="text-2xl text-white font-[helvetica]
      lg:text-4xl w-full
      ">
        <h2><strong>What is Unteyo Journey?</strong></h2>
      </div>
      <div className="flex flex-col gap-5 pt-2 pb-6
      lg:flex-row items-start justify-start
      ">
        <p className="text-sm text-white font-[helvetica] relative
        lg:mt-[0] lg:text-xl lg:w-[60%]
        ">
          Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.
          <br/>
          Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.
        </p>
        <img src={Laptop} className="w-56 self-end z-[2] relative lg:w-84" alt="Laptop" />
      </div>
      <a href="/newUnteyo/about/" className="bg-white/10 border text-center border-white/20 text-white font-semibold px-6 py-3 pb-4 rounded-full hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto
      lg:w-96
      ">
                    Get to Know About Us
                </a>
    </AnimatedSection>
  );
}

export default About;