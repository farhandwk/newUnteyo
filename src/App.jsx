// src/App.jsx

import { useRef } from 'react'; // 1. Impor useRef
import Header from "./components/Header"
import Landing from './components/Landing';
import About from './components/About';
import Program from './components/Program';
import Connect from './components/Connect';
import BackgroundScroll from './components/BackgroundScroll';
import EventComing from './components/EventComing';
import  PastEvent from "./components/PastEvent"
import Footer from "./components/Footer"
import './App.css';

function App() {
  // 2. Buat sebuah ref untuk elemen target kita
  const scrollTargetRef = useRef(null);

  return (
    <main className="w-full bg-black max-w-screen">
      <Header></Header>
      <Landing />

      {/* 3. Pasang 'ref' di sini dan berikan ke BackgroundScroll sebagai prop */}
      <div ref={scrollTargetRef} className="relative isolate">
        <BackgroundScroll targetRef={scrollTargetRef} />
        <div className="relative z-10">
          <About />
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