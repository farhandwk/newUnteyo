import React from 'react'
import { motion } from 'framer-motion';

import creative_media from "../assets/Program/CREATIVE-MEDIA.png"
import movement from "../assets/Program/MOVEMENT.png"
import sharing_session from "../assets/Program/SHARING-SESSION.png"
import short_course from "../assets/Program/SHORT-COURSE.png"
import social_education from "../assets/Program/SOCIAL-EDUCATION.png"

const program = [
  {id: 1, img: creative_media, text: "Creative Media"},
  {id: 2, img: movement, text: "Movement"},
  {id: 3, img: sharing_session, text: "Sharing Session"},
  {id: 4, img: short_course, text: "Short Course"},
  {id: 5, img: social_education, text: "Social Education"}
]

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
        <div className='bg-white/10 rounded-[15px] grid grid-cols-2 gap-4 p-8'>
          {program.map((item) =>(
          <div key={item.id} className={`w-auto rounded-[20px] flex flex-col items-center justify-center ${item.id === 5 ? "col-span-2" : ""}`}>
            <img src={item.img} className='w-32'></img>
            <span className='text-white font-semibold text-sm'>{item.text}</span>
          </div>
          ))}
        </div>
        <a href='/program/' className="bg-white/10 text-center border border-white/20 text-white font-semibold px-6 py-3 pb-4 rounded-full hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto
      lg:w-96
      ">
                    Dive Into Our Program
                </a>
    </AnimatedSection>
  )
}

export default Program
