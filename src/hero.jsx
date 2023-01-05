import React from 'react'
import Ball from './images/ball.svg'
import './style.css';

const 
Hero
 = () => {
  return (
    <div className="flex items-center justify-center bg-[#0F0F12] w-screen h-screen flex-row  sm:flex-col sm:h-[80vh]" style={{
       backgroundImage: `url(https://assets.website-files.com/624f34ee3b91afefdf14076f/624f8a14314de6afdb6b32c0_image-mesh-hero-blockchain-template.svg)`,
    //    height: '100vh',
    //    width: '100vw',
       backgroundSize: 'cover',
    //    backgroundColor:'#0F0F12',
    //    display: 'flex',
    //    alignItems: 'center',
    //    justifyContent: 'center',
    //    flexDirection: 'row',
    }}>
   
    <div style={{
        // display: 'flex',
        // justifyContent: 'start',
        // alignItems: 'start',
        // width: '50%',
        // height:'100vh',
        zIndex:'1'
    }} className="flex shrink items-start justify-center p-10 lg:ml-[10%] flex-col w-2/4 h-screen sm:w-screen sm:h-2/4 sm:mt-28 ">
    <h3 className="text-[#00b082] text-start text-2xl font-clash font-bold">KIWIBET</h3>
    <h1 className=" shrink text-start text-white font-clash font-bold text-5xl  xsml:text-4xl smx:text-5xl md:text-7xl lg:text-9xl">TOP NOTCH SPORTS PREDICTION</h1>
    <h6 className="text-start text-white font-clash font-middle">
    Kiwibet is a sports betting website that makes it simple to anticipate the results of games. 
    It is important to us that our members get the greatest experience possible when placing bets on sporting events. 
    </h6>
   <div className="flex sm:flex-col">
   <button className="w-32 h-10 bg-white m-1 rounded hover:bg-[#00b082] hover:text-white font-clash font-semibold text-green-600">Example</button>
    <button className="w-32 h-10 bg-[#00b082] m-1 rounded hover:bg-white hover:text-[#00b082] font-clash font-semibold text-white">Example</button>
   </div>
    </div>
    <div
    style={{
        // display: 'flex',
        // justifyContent: 'start',
        // alignItems: 'center',
        // width: '50%',
        // backgroundColor: 'blue',
        // height:'100vh',
    }} className="flex items-center justify-center w-2/4 h-screen sm:w-screen sm:h-2/4">
         {/* <h1 className="text-black font-clash font-bold">TOP NOTCH SPORTS PREDICTION</h1> */}
         <img className="absolute w-2/3 h-2/3 smx:left-[33%] sm:w-9/12 sm:h-9/12 sm:bottom-[2.5%]" 
         style={{}}
        //  class="rotate"
         src={Ball} alt="Football"/>
    </div>
    </div>
  )
}

export default 
Hero
