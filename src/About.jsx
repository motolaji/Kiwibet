import React, { useEffect } from "react";
import Player from './images/footballPlayer 1.svg'
import Sphere from './images/Wireframesphere.svg'
import BG from './images/footballbg1.svg'
import Data from './Components/Data/update.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Keyboard, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//console.log(Data.Update.team)
const About = () => {

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1}},
    hidden: { opacity: 0, scale: 0 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      section id="" className="w-screen h-auto bg-[#0F0F12]">
     {/* <div className=" flex h-3/5 sm:flex-col smx:p-40 sm:p-10" 
    style={{
      //  backgroundImage: `url(${BG})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
    }}
    >
        <h3 className="font-clash font-semibold text-white text-6xl uppercase text-start sm:text-2xl animate-fade-in-down">When you place bets, you want to feel secure, therefore we've made it our mission to give you the finest experience we can when it comes to making sports predictions.
     </h3>
    </div> */}
    <motion.div 
     ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      
    className="bg-[#0F0F12] h-auto flex justify-center items-center flex-wrap font-clash text-white">
    <h1 className='font-semibold uppercase text-2xl m-8'>Tips of the day</h1>
    <Swiper  
    slidesPerView={1}
    spaceBetween={30}
    keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }} 
        navigation={true} modules={[Keyboard, Pagination,Navigation]} 
        className="mySwiper">
    {Data.Update.team.map((item) =>(
      <SwiperSlide>
      <div className="flex items-center justify-center h-auto ">
      <div className="flex flex-col items-center  justify-center w-60">
      <img className='w-16 h-16' src={item.HomeLogo} alt='Logo'/>
      <h3>{item.Home}</h3>
      </div>
      <h6 className="font-semibold">VS</h6>
      <div className="flex flex-col items-center justify-center w-60">
      <img className='w-16 h-16' src={item.AwayLogo} alt='Logo'/>
      <h3>{item.Away}</h3>
      </div>
      </div>
      <div>
      <h4 className=''>Tips:</h4>
      <h4 className='blur-sm text-white'>{item.Tips}</h4>
     <h4> Join our telegram channel to view</h4>
      <button className="w-auto p-2 h-10 bg-white rounded hover:bg-green-600 hover:text-white font-clash font-semibold text-green-600 m-8">
      <a href="https://t.me/joinchat/AAAAAFKb2ttIBE44QLG-TQ">Join us on telegram</a>
      </button>
      </div>
      </SwiperSlide>
      
     
    ))}
    </Swiper>
    </motion.div>
    {/* <div className="bg-green-600 h-1/5"></div> */}
    </div>
  )
}

export default About