import React from 'react'
import WaveDot from "./WaveDot"
import like from "../assets/like.png";
import love from "../assets/love.png";
import "../App.css"

function Landing() {
  return (
    <section className='text-[white] w-[100vw] h-auto flex flex-col justify-center p-4  overflow-hidden relative overflow-hidden'
    style={{
        // Membuat 80% atas section berwarna hitam, lalu memudar ke transparan di bawah.
        background: 'linear-gradient(to bottom, black 85%, transparent)'
      }}
    >
        <div style={{
            background: '-webkit-radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 1) 20%, rgba(255, 69, 0, 1) 80%)',
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 1) 20%, rgba(255, 69, 0, 1) 80%)',
            position: 'absolute',
            width: '300px',
            height: '300px',
            top: '-20vh',
            left: '90vw',
            filter: 'blur(90px)',
            borderRadius: '5vw',
            overflow: 'hidden'
        }}></div>
        <WaveDot className='absolute '></WaveDot>
        <img
            className="
            like
            absolute
            w-[55px]
            left-[8vw] top-[30vh]

            md:w-[80px] 
            lg:w-[100px]
            lg:top-[37vh]
            "
            src={like}
            alt="Like icon"
            style={{
                animation: "bounce 1.8s ease-in-out infinite"
            }}
        />
        
        <img
            className="
            love
            absolute
            w-[60px]
            left-[80vw] top-[60vh]

            md:w-[80px]
            
            lg:w-[100px]
            lg:top-[60vh]
            "
            src={love}
            alt="Love icon"
            style={{
                animation: "bounce 1.8s ease-in-out infinite"
            }}
        />
        <div className=' flex flex-col justify-center items-center pt-[80%] relative z-[1] md:gap-2 md:pt-[20%] lg:gap-8'>
            <h1 className='font-[Helvetica] text-4xl md:text-7xl lg:text-9xl'><strong>Unteyo Journey</strong></h1>
            <span className='font-[Helvetica] text-lg md:text-2xl  lg:text-3xl'>Greetings Quality Students</span>
        </div>
        <button className='
        border-white border-2 w-[80%] self-center rounded-[10px] mt-[45%] h-[50px] font-[Helvetica] text-sm hover:text-black hover:bg-[white] 
        lg:w-[40%] lg:h-[80px] lg:mt-[10%] lg:rounded-[20px] 
        ' style={{
            transition: "all 0.5s"
        }}>Explore Our Journey</button>
    </section>
  )
}

export default Landing
