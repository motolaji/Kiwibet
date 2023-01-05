import React from 'react'
import Player from './images/footballPlayer 1.svg'
import Sphere from './images/Wireframesphere.svg'
import BG from './images/footballbg1.svg'
import Data from './Components/Data/update.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
//
console.log(Data.Update.team)
const About = () => {
  return (
    <div  section id="About" className="w-screen h-screen bg-[#0F0F12]">
    {/* <div className=" flex h-3/5 p-6 sm:flex-col bg-green-600">
    <div className="flex items-center justify-center w-2/4 h-full mdm:w-full mdm:h-2/4 mdm:p-2">
    <img className='w-[600px] h-[600px] sm:max-w-none absolute sm:top-[95%]' 
         style={{}}  src={Sphere} alt="Sphere"/>
    </div>
     <div className="w-2/4 h-full items-center justify-start flex sm:w-full sm:h-2/4">
      <h3 className="z-10 font-clash font-semibold text-white text-4xl text-start sm:text-lg animate-fade-in-down">When you put bets, you want to feel secure, therefore we've made it our mission to give you the finest experience we can when it comes to making sports predictions.
     </h3>
     </div>
    </div> */}
    <div className=" flex h-3/5 sm:flex-col smx:p-40 sm:p-10" 
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
    </div>
    <div className="bg-[#0F0F12] h-2/5 flex justify-center items-center flex-wrap font-clash text-white">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {Data.Update.team.map((item) =>(
      <SwiperSlide><div className="flex items-center justify-center ">
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
      <button className="w-32 h-10 bg-white m-1 rounded hover:bg-green-800 font-clash font-semibold text-green-600">Join Telegram</button>
      </div>
      </SwiperSlide>
      
     
    ))}
    </Swiper>
    </div>
    {/* <div className="bg-green-600 h-1/5"></div> */}
    </div>
  )
}

export default About