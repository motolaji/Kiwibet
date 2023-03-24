import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ball from './images/ball1.webp'
import './style.css';

const Hero = () => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1}},
    hidden: { opacity: 0, scale: 0 }
  };
  const slideVariants = {
    visible: { x: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }},
    hidden: { x:'-50%', transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } }
    
  };

  const characterAnimation = {

    hidden: {

      opacity: 0,

      y: `0.25em`,

    },

    visible: {

      opacity: 1,

      y: `0em`,

      transition: {

        duration: 1,

        ease: [0.2, 0.65, 0.3, 0.9],

      },

    },

  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="flex items-center justify-center bg-[#0F0F12] w-screen h-auto flex-row  sm:flex-col sm:h-[80vh] mdm:flex-col mdm:h-[80vh]" style={{
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
   
    <motion.div 
   ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideVariants}
    
    style={{ zIndex:'1'}} 
    className="flex shrink items-start justify-center p-10 lg:ml-[10%] flex-col w-2/4 h-screen sm:w-screen sm:h-2/4 sm:mt-28 mdm:w-screen mdm:h-2/4 mdm:mt-28">
    <h3 className="text-[#00b082] text-start text-2xl font-clash font-bold">KIWIBET</h3>
    <h1 className=" shrink text-start text-white font-clash font-bold text-5xl  xsml:text-4xl smx:text-5xl md:text-7xl lg:text-9xl">TOP NOTCH SPORTS PREDICTION</h1>
    <h6 className="text-start text-white font-clash font-middle">
    {/* Kiwibet is a sports betting website that makes it simple to anticipate the results of games. 
    It is important to us that our members get the greatest experience possible when placing bets on sporting events.  */}
    Win Consistently with Kiwibet’s reliable and accurate betting tips 
    </h6>
   <div className="flex sm:flex-col">
   <a className="w-auto h-10 bg-white m-1 flex items-center justify-center rounded hover:bg-[#00b082] hover:text-white font-clash font-semibold text-green-600 text-sm p-2" href="#mobile">Download App</a>
    <a className="w-auto h-10 bg-[#00b082]  flex items-center justify-center m-1 rounded hover:bg-white hover:text-[#00b082] font-clash font-semibold text-white text-sm p-2" href="https://t.me/joinchat/AAAAAFKb2ttIBE44QLG-TQ">Join us on telegram</a>
   </div>
    </motion.div>
    <motion.div
   className="flex items-center justify-center w-2/4 h-screen sm:w-screen sm:h-2/4">
         <img className="object-contain absolute w-2/3 h-2/3 smx:left-[33%] sm:w-9/12 sm:h-9/12 sm:bottom-[2.5%] mdm:left-[12%] mdm:w-9/12 mdm:h-9/12 mdm:bottom-[2.5%] rounded-full " 
         style={{}}
         src={Ball} alt="KiwiBet-Football"/>
    </motion.div>
    </div>
  )
}

export default 
Hero
