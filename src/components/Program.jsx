// src/components/Program.jsx
import React from 'react';
// 1. Impor 'motion' dari framer-motion
import { motion } from 'framer-motion';
import CD from '../assets/CDhal3.png';
import M from '../assets/Mhal3.png';
import SS from '../assets/SShal3.png';
import SC from '../assets/SChal3.png';
import S from '../assets/SEhal3.png';
import ProgramCard from './ProgramCard';

function Program() {
  const program = [
    { id: 1, title: 'Social Education', img: S },
    { id: 2, title: 'Sharing Session', img: SS },
    { id: 3, title: 'Movements', img: M },
    { id: 4, title: 'Creative Media', img: CD },
    { id: 5, title: 'Short Course', img: SC },
  ];

  return (
    <section className="w-screen h-auto text-white flex-col items-center text-center p-8 overflow-hidden">
      <h2 className="text-xl font-[helvetica] text-white lg:text-4xl"><strong>Our Program</strong></h2>
      
      <div className="p-4 flex flex-row flex-wrap justify-center gap-4 mt-4">
        {program.map((item, index) => (
          // Gunakan ProgramCard dan teruskan 'item' serta 'index'
          <ProgramCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Program;