import React, {useEffect} from 'react'
import Top from './images/top.svg'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Mobile = () => {
  const slideVariants = {
    visible: { x: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }},
    hidden: { x:'-50%', transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } }
    
  };

  const slideVariantsright = {
    visible: { x: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }},
    hidden: { x:'50%', transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } }
    
  };

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
    <div  section id="mobile" className='bg-[#0F0F12] w-screen h-auto flex sm:flex-col justify-center items-center'>
    <motion.div 
    ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
    
    className='bg-[#0F0F12] flex justify-center items-center sm:flex-col'>
    <h1 className='uppercase sm:pt-10 items-center font-clash text-3xl sm:text-2xl text-white font-semibold md:text-start md:m-6 lg:text-start sm:text-start xsml:top-[%] xsm:top-[10%] max-w-[80%] sm:pl-10'>
    KIWIBET Mobile application,<br></br>get latest sport information <br></br>all in one place.<br></br>
    <span className='text-green-600'> coming soon.</span></h1>
    <img className='h-96 w-96 smx:mr-10 max-w-[70%]' src={Top} alt='mobile app'/>
    </motion.div>
    </div>
  )
}

export default Mobile