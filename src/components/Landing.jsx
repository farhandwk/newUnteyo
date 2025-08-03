import React from 'react'
import WaveDot from "./WaveDot"
import like from "../assets/like.png";
import love from "../assets/love.png";
import "../App.css"

function Landing() {
    const twinimg = [
        {id: 1, img: like, alt: "like"},
        {id: 2, img: love, alt: "love"},
    ]

  return (
    <section className='text-[white] w-[100vw] h-screen flex flex-col justify-center p-4  overflow-hidden relative overflow-hidden'
    style={{

        background: 'linear-gradient(to bottom, black 85%, transparent)'
      }}
    >
        <div style={{
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
        <WaveDot className=''></WaveDot>
        <div className='flex flex-col justify-center items-center pt-[20%] relative z-[1] gap-8 md:gap-2 md:pt-[10%] lg:gap-8'>
            <div className='flex flex-row justify-start pl-4 w-full lg:pl-48'>
                <img src={like} className='w-16 relative lg:w-20'></img>
            </div>
            <div className=' flex flex-col justify-center items-center relative z-[1] md:gap-2 lg:gap-8'>
                <h1 className='font-[Helvetica] text-4xl md:text-7xl lg:text-8xl'><strong>Unteyo Journey</strong></h1>
                <span className='font-[Helvetica] text-lg md:text-2xl  lg:text-3xl'>Greetings Quality Students</span>
            </div>
            <div className='flex flex-row justify-end pl-4 w-full lg:pr-48'>
                <img src={love} className='w-16 relative lg:w-20 '></img>
            </div>
        </div>
        <button className='
        border-white border-2 w-[80%] self-center rounded-[10px] mt-[30%] h-[50px] font-[Helvetica] text-sm hover:text-black hover:bg-[white] 
        lg:w-[35%] lg:h-[60px] lg:mt-[2%] lg:rounded-[15px]  font-[helvetica] cursor-pointer
        ' style={{
            transition: "all 0.5s"
        }}>Explore Our Journey</button>
    </section>
  )
}

export default Landing
