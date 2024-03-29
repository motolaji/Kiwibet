import React, {useEffect} from 'react';
import Soffy from './images/Sophia Animation.gif'
import Sophy from './images/Sophia Pale Green.gif'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sophia = () => {

    const slideVariants = {
        visible: { x: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }},
        hidden: { x:'-50%', transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } }
        
      };

      const slideVariantsright = {
        visible: { x: 0, transition: { ease: [1.365, 0.09, 1.545, 2.865], duration: 0.75 }},
        hidden: { x:'50%', transition: { ease: [1.365, 0.09, 1.545, 2.865], duration: 0.85 } }
        
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
     <div
    //   ref={ref}
    //         animate={controls}
    //         initial="hidden"
    //         variants={slideVariants}
      className="w-screen h-auto bg-[#0F0F12] flex justify-center align-center flex-col"
      style={{
   backgroundImage: `url(https://assets.website-files.com/624f34ee3b91afefdf14076f/624f8a14314de6afdb6b32c0_image-mesh-hero-blockchain-template.svg)`,
   backgroundSize: 'cover',
}}>
    <motion.div 
     ref={ref}
            animate={controls}
            initial="hidden"
            variants={slideVariants}
    
    className="flex items-center justify-center text-white w-screen h-auto sm:h-auto sm:w-screen sm:flex-col p-8">
        <div className='w-6/12 h-full sm:h-6/12 sm:w-full flex justify-center items-center'>
        <img className='w-[450px] sm:w-full sm:h-[50%] rounded h-[480px]' src={Sophy} alt='sophia'/>
        </div>
        <div className='w-6/12 h-full flex items-start flex-col justify-center sm:h-auto sm:w-full smx:pl-8'>
            <h1 className="text-5xl sm:text-3xl font-bold font-clash text-start mt-2 mb-5">MEET <br></br>SOPHIA</h1>
            <h5 className="text-lg font-clash text-start mb-5">
            Kiwibet's Intelligent Assistant that will revolutionize your betting experience. Get instant answers to all your questions, process payments quickly, and learn more about the amazing Kiwibet brand through Sophia. 
            </h5>
            <a className="w-auto p-2 h-10 bg-[#00b082] flex items-center justify-center rounded hover:bg-white hover:text-[#00b082] font-clash font-semibold text-white" href="https://t.me/kiwibetbot">Chat with sophia</a>
        </div>
    </motion.div>
    <div 
    section id="Subscribe" className="flex items-center justify-center text-white w-screen h-auto sm:h-auto sm:w-screen sm:flex-col p-8">
        <div className='w-6/12 h-full flex items-start flex-col justify-center sm:h-auto sm:w-full smx:pl-8'>
            <h1 className="text-5xl sm:text-3xl font-bold font-clash text-start mb-2 uppercase">Learn Betting with Kiwi.</h1>
            <h5 className="text-lg font-clash text-start mb-5">
            For beginners and experienced bettors,
            <br></br>Our expert team has compiled a range of resources and contents to help you learn the ins and outs of sports betting.
            From detailed guides on the different types of bets available to strategies for maximizing your chances of success, we have everything you need to get started on the right foot. And with free betting tips and predictions, personalized advice, and a VIP subscription service with exclusive content and perks, we have the tools and support you need to take your betting skills to the next level and maximize your wins. 
            </h5>
            <a className="w-36 h-10 bg-[#00b082]  flex items-center justify-center rounded hover:bg-white hover:text-[#00b082] font-clash font-semibold text-white" href='https://t.me/kiwibet01'>Learn more</a>
        </div>
        {/* <div className='w-6/12 h-full sm:h-6/12 sm:w-full flex justify-center items-center'>
        <img className='w-[350px] sm:w-full sm:h-[50%] rounded h-[280px]' src={Soffy} alt='sophia'/>
        </div> */}
    </div>
    </div>
  )
}

export default Sophia