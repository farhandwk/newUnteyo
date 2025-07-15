// src/components/Header.jsx

import DropdownNavDekstop from "./DropdownNavDesktop";
import logo from "../assets/logo.png"
import hamburger from "../assets/ham.png"
import { useEffect, useState } from "react";
import "../App.css"
// 1. Impor komponen baru
import MobileNav from "./MobileNav";

// Data
const companyItems = [
  { id: 1, title: "About Us", link: "#" },
  { id: 2, title: "Careers", link: "#" },
  { id: 3, title: "Partners", link: "#" },
];

const eventItems = [
  { id: 1, title: "Social Education", link: "#" },
  { id: 2, title: "Sharing Session", link: "#" },
  { id: 3, title: "Movement", link: "#" },
  { id: 4, title: "All Events", link: "#" },
];

const postItems = [
  { id: 1, title: "Articles", link: "#" },
  { id: 2, title: "Press Release", link: "#" },
  { id: 3, title: "Blog", link: "#" },
];

const comingSoonContent = (
  <div className="text-center text-xs text-white bg-black w-[120px] h-[180px] rounded-lg flex flex-col justify-center p-2">
    <img
      src="https://via.placeholder.com/80x120?text=Coming+Soon"
      alt="Coming soon"
      className="mx-auto mb-2 rounded"
    />
    <span className="mt-2">Coming soon...</span>
  </div>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`Helvetica text-white w-full px-4 sm:px-8 py-4 flex flex-row justify-between items-center z-[99] fixed top-0 transition-colors duration-300 max-h-20 md:max-h-none ${
          isScrolled || isSidebarOpen ? "scrolled" : ""
        }`} 
      >
        <img src={logo} className="w-[74px] h-[80px] " alt="Logo"/>
        
        {/* 5. Navigasi Desktop: Gunakan 'lg:flex' agar hanya tampil di layar besar */}
        <div className="hidden lg:flex flex-row items-center gap-[100px] p-[30px]">
          <DropdownNavDekstop label="Company" items={companyItems} align="left"/>
          <DropdownNavDekstop label="Event" items={eventItems} leftContent={comingSoonContent} align="center"/>
          <DropdownNavDekstop label="Post" items={postItems} align="right"/>
        </div>

        {/* 6. Tombol Menu Mobile: Gunakan 'lg:hidden' agar hanya tampil di layar kecil */}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
          <img src={hamburger} ></img>
        </button>
      </nav>
      
      {/* 7. Render komponen sidebar di sini */}
      <MobileNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}