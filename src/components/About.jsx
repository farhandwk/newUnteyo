// src/components/About.jsx

// Impor 'forwardRef' dari React
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import what_is from "../assets/WHAT-IS.png";

// Gunakan forwardRef untuk menerima 'ref' dari komponen induk
const About = forwardRef((props, ref) => {

  // Komponen animasi bisa tetap di dalam
  const AnimatedSection = ({ children }) => (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Pasang 'ref' di elemen section ini
      ref={ref}
      className='w-full h-auto pt-0 flex flex-col items-center justify-center p-12 gap-2 lg:pl-[15%]'
    >
      {children}
    </motion.section>
  );

  return (
    <AnimatedSection>
      <div className="text-2xl text-white font-[helvetica] lg:text-4xl w-full lg:pt-36">
        <h2><strong>What is Unteyo Journey?</strong></h2>
      </div>
      <div className="flex flex-col gap-5 pt-2 pb-6 lg:flex-row items-start justify-start">
        <p className="text-sm text-white font-[helvetica] relative lg:mt-[0] lg:text-xl lg:w-[60%]">
          Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.
          <br />
          Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.
        </p>
        <img src={what_is} className="w-48 self-end z-[2] relative lg:w-76" alt="Laptop" />
      </div>
      <a href="/about/" className="bg-white/10 border text-center border-white/20 text-white font-semibold px-6 py-3 pb-4 rounded-full hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto lg:w-96">
        Get to Know About Us
      </a>
    </AnimatedSection>
  );
});

export default About;