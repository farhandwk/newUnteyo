import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import img from "../assets/eventNow.png"


const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MapPinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

function InteractiveGlassCard() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hintText, setHintText] = useState("Click me");

  useEffect(() => {
    const updateHintText = () => {
        if (window.innerWidth >= 768) {
            setHintText("Hover me");
        } else {
            setHintText("Click me");
        }
    };
    updateHintText();
    window.addEventListener('resize', updateHintText);
    
    const interval = setInterval(() => {
        setShowHint(prev => !prev);
    }, 1500);

    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', updateHintText);
    };
  }, []);


  const handleCardClick = () => {
    if (window.innerWidth < 768) {
        setIsOverlayVisible(!isOverlayVisible);
    }
  };

  return (
    <div 
      className="font-[helvetica] group relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
      onClick={handleCardClick}
    >
      <img 
        src={img}
        alt="Suasana event teknologi"
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${showHint ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-0 ${isOverlayVisible ? 'opacity-0' : ''}`}>
        <span className="text-white text-lg bg-black/40 px-4 py-2 rounded-lg">{hintText}</span>
      </div>
      <div className={`absolute inset-0 w-full h-full p-6 pb-18 lg:p-6 flex flex-col justify-end items-start bg-black/50 backdrop-blur-lg border-t-2 border-white/40 transition-all duration-500 ease-in-out opacity-0 md:group-hover:opacity-100 ${isOverlayVisible ? 'opacity-100' : ''}`}>
        <div className="transform md:group-hover:translate-y-0 translate-y-12 transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mb-2"><strong>Story of Pilmapres: Menjadi Mahasiswa Berprestasi Utama</strong></h3>
            <p className="text-white text-sm mb-4">Get ready to be the next inspiration!!</p>
            <div className="space-y-2">
                <div className="flex items-center"><CalendarIcon className="w-5 h-5 text-white" /><span className="text-white font-semibold ml-2 text-sm">DEC 16 2024</span></div>
                <div className="flex items-center"><MapPinIcon className="w-5 h-5 text-white" /><span className="text-white font-semibold ml-2 text-sm">Taman Kampus 1 UTY</span></div>
            </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 p-6 transition-opacity duration-300 ease-in-out md:group-hover:opacity-0 ${isOverlayVisible ? 'opacity-0' : 'opacity-100'}`}>
      </div>
    </div>
  );
}

function EventComing() {

  const AnimatedSection = ({ children }) => (
    <motion.section
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='w-full h-full flex flex-col items-center justify-center p-12 gap-2  lg:min-h-screen'
    >
      {children}
    </motion.section>
  );
  
    
    
  return (
    <AnimatedSection>
            {/* Jika Ada Event */}
            {/* <div className="text-center mb-8">
                <h1 className="text-2xl md:text-4xl text-white lg:text-4xl"><strong>Event Is Coming</strong></h1>
            </div>
            <InteractiveGlassCard />
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10 w-full max-w-xs sm:max-w-none justify-center">
                <button className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto">
                    Register Now
                </button>
                <button className="bg-transparent border border-white/40 text-white/80 font-semibold px-6 py-3 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-300 w-full sm:w-auto">
                    More Info
                </button>
                <button className="bg-transparent border border-white/40 text-white/80 font-semibold px-6 py-3 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-300 w-full sm:w-auto">
                    Contact Admin
                </button>
            </div> */}

            {/* JIka Tidak Ada Event */}
            <div className='font-[helvetica] text-center mb-8 w-full h-full flex flex-col items-center justify-center'>
              <h1 className="text-2xl md:text-4xl text-white lg:text-4xl pt-24 pb-18"><strong>Event Is Coming</strong></h1>
              <p className='w-78 h-12 md:h-16 md:w-96 p-0 border-2 border-white rounded-full text-1xl md:text-3xl text-white lg:text-3xl flex items-center justify-center'>Stay Tune</p>
            </div>
        </AnimatedSection>
  )
}

export default EventComing
