// src/components/ProgramCard.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Komponen ini menerima 'item' (data) dan 'index' (urutan) dari parent-nya
const ProgramCard = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Animasi akan selesai saat bagian tengah kartu mencapai tengah layar
    offset: ["start end", "end center"]
  });

  // Tentukan arah gerakan (x) berdasarkan index ganjil atau genap
  // Jika genap (kiri), mulai dari -100. Jika ganjil (kanan), mulai dari 100.
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0]);
  
  // Animasi opacity agar muncul perlahan
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }} // Terapkan animasi geser (x) dan opacity
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md flex flex-col justify-between lgp:p-2"
    >
      <img
        src={item.img}
        className="w-24 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 lg:w-36"
        alt={item.title}
      />
      <h3 className="font-[helvetica] text-sm mt-2 lg:text-xl">{item.title}</h3>
    </motion.div>
  );
};

export default ProgramCard;