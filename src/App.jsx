// src/App.jsx

import { useRef } from 'react'; // 1. Impor useRef
import Header from "./components/Header"
import Landing from './components/Landing';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import Program from './components/Program';
import Connect from './components/Connect';
import BackgroundScroll from './components/BackgroundScroll';
import EventComing from './components/EventComing';
import  PastEvent from "./components/PastEvent"
import Footer from "./components/Footer"
import './App.css';

function App() {
  const scrollTargetRef = useRef(null);
  const nextSectionRef = useRef(null)

  return (
    <main className="w-full bg-black max-w-screen">
      <Header></Header>
      <Landing scrollToSection={nextSectionRef}/>

      {/* 3. Pasang 'ref' di sini dan berikan ke BackgroundScroll sebagai prop */}
      <div ref={scrollTargetRef} className="relative isolate">
        <BackgroundScroll targetRef={scrollTargetRef} />
        <div className="relative z-10">
          <About ref={nextSectionRef}/>
          <ServicesSection />
          <Program />
          <EventComing/>
          <PastEvent/>
        </div>
      </div>
      <Connect />
      <Footer/>
    </main>
  );
}

export default App;