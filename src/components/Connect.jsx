import React, { useState } from "react";
import { motion } from "framer-motion";
import anggotabaru from "../assets/anggotabaru.png";
import Terai from "../assets/LogoTerai.png";
import Hubungins from "../assets/LogoHubung'ins.png";
import Perspektif from "../assets/LogoPerspektif.png";
import Sigma from "../assets/LogoSigma.png"
import Tribes from "../assets/LogoTribes.png"
import UCH from "../assets/LogoUCH.png"
import "../App.css"

// 1. Kita ubah data partner menjadi sebuah array of objects agar lebih mudah dikelola
const partnerLogos = [
  { id: 'terai', src: Terai, alt: 'Terai'},
  { id: 'perspektif', src: Perspektif, alt: 'Perspektif'},
  { id: 'sigma', src: Sigma, alt: 'Sigma'},
  { id: 'tribes', src: Tribes, alt: 'Tribes'},
  { id: 'uch', src: UCH, alt: 'UCH'},
];

function Connect() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const [activeLogoId, setActiveLogoId] = useState(null);

  // 3. Buat fungsi untuk menangani klik pada logo
  const handleLogoClick = (id, event) => {
    event.stopPropagation(); // Mencegah klik menyebar ke background
    setActiveLogoId(id === activeLogoId ? null : id); // Jika logo yang sama diklik lagi, nonaktifkan
  };

  // 4. Buat fungsi untuk menangani klik di background untuk menonaktifkan semua
  const handleBackgroundClick = () => {
    setActiveLogoId(null);
  };

  return (
    <div className="relative min-h-screen md:min-h-[0] lg:min-h-screen py-16 overflow-hidden font-[helvetica] pt-30 lg:pt-40">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="font-[helvetica] text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            <strong>Let's Connect</strong>
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="font-[helvetica] text-3xl md:text-5xl lg:text-5xl font-bold text-white  inline-block px-4 py-2"
          >
            <strong>with Us</strong>
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 flex justify-center"
        >
          <div className="image-wrapper relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={anggotabaru}
              alt="Team Members"
              className="w-full object-cover"
            />
            <div 
            className="absolute bottom-0 left-0 right-0 h-[85%] bg-gradient-to-t from-black to-transparent"
            aria-hidden="true" 
          />
          </div>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-7 md:space-y-9">
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4 lg:mb-[30px]">
                Supported By:
              </h3>
              <img
                src={Hubungins}
                alt="Hubungins"
                className="w-24 mx-auto grayscale hover:grayscale-0 active:grayscale-0 focus:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Partner Us:
              </h3>
              <div className="flex space-x-6 justify-center items-center flex-wrap">
                {/* 5. Render logo dari array menggunakan .map() */}
                {partnerLogos.map((logo) => (
                  <img
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    onClick={(e) => handleLogoClick(logo.id, e)}
                    className={`w-24 transition-all duration-300 ${
                      activeLogoId === logo.id ? 'grayscale-0' : 'grayscale'
                    } hover:grayscale-0 active:grayscale-0 focus:grayscale-0`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mobile Blobs */}
        <div className="block md:hidden">
          <div className="absolute top-[30%] left-[15%] w-32 h-32 md:w-64 md:h-64 bg-[#b22e15]/30 rounded-full blur-2xl animate-blob"></div>
          <div className="absolute top-[31%] right-[15%] w-28 h-28 md:w-64 md:h-64 bg-[#e0c39f]/30 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-[31%] right-[15%] w-28 h-28 md:w-64 md:h-64 bg-[#d67e45]/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Tablet Blobs */}
        <div className="hidden md:block lg:hidden">
          <div className="blobMD absolute top-[30%] left-[15%] w-32 h-32 bg-[#b22e15]/30 rounded-full blur-3xl animate-blob-md"></div>
          <div className="absolute top-[31%] right-[15%] w-28 h-28 bg-[#e0c39f]/30 rounded-full blur-3xl animate-blob-md animation-delay-2000"></div>
          <div className="absolute top-[31%] right-[15%] w-28 h-28 bg-[#d67e45]/30 rounded-full blur-3xl animate-blob-md animation-delay-4000"></div>
        </div>

        {/* Desktop Blobs */}
        <div className="hidden lg:block">
          <div className="absolute top-1/4 left-[30%] w-80 h-80 bg-[#b22e15]/30 rounded-full blur-3xl animate-blob-lg"></div>
          <div className="absolute bottom-[40%] right-[35%] w-60 h-60 bg-[#e0c39f]/30 rounded-full blur-3xl animate-blob-lg animation-delay-2000"></div>
          <div className="absolute top-[40%] right-[35%] w-60 h-60 bg-[#d67e45]/30 rounded-full blur-3xl animate-blob-lg animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
