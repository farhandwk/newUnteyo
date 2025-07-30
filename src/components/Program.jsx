import React from 'react'
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, amount: 0.3 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='w-screen h-screen pt-12 flex flex-col items-center justify-center p-8 font-[helvetica] flex flex-col items-center justify-center gap-8'
  >
    {children}
  </motion.section>
);

function Program() {
  return (
    <AnimatedSection className=''>
        <h2 className='text-white text-2xl lg:text-4xl'><strong>Program</strong></h2>
        <div className='w-7/8 h-5/8 bg-white/10 rounded-[15px]'>

        </div>
        <a href='/newUnteyo/program/' className="bg-white/10 text-center border border-white/20 text-white font-semibold px-6 py-3 pb-4 rounded-full hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto
      lg:w-96
      ">
                    Dive Into Our Program
                </a>
    </AnimatedSection>
  )
}

export default Program
