import React, {useEffect} from 'react'
import Subscribe from './images/Group.svg'
import Won from './images/money.svg'
import Accuracy from './images/accuracy.svg'
import Customer from './images/customer.svg'
import Sophia from './images/Sophia Animation.gif'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import REVIEW from './Components/Data/review.json'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Feature = () => {

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
    <div className='w-screen h-auto bg-[#0F0F12] flex justify-center align-center flex-col'>
    {/* features */}
   
        <div 
        className='w-full flex sm:w-screen sm:flex-col '>
        <div 
        // ref={ref}
        //     animate={controls}
        //     initial="hidden"
        //     variants={slideVariants}
        className='flex flex-col w-1/4 h-auto bg-[#333] text-white sm:h-4/12 sm:w-full p-8'>
            <div className=''>
                <img className='w-14 h-14' src={Subscribe} alt='origami'/>
            </div>
            <div
             className='w-full h-4/5 border-b-4  border-[#00b082] border-double'>
                <h1 className='font-clash text-4xl font-semibold text-start md:text-[26px] mdm:text-2xl'>100K+ <br></br>Active Subscribers.</h1>
                <h5 className='font-clash text-xl text-start mdm:text-lg'>
                Our dedication to providing accurate and reliable bet predictions has earned us a strong reputation and a loyal following.
                </h5>
            </div>
        </div>
        <div className='flex flex-col w-1/4 h-auto bg-[#0F0F12] text-white sm:h-4/12 sm:w-full p-8'>
        <div className=''>
                <img className='w-14 h-14' src={Won} alt='origami'/>
            </div>
            <div 
            
            // ref={ref}
            // animate={controls}
            //  initial="hidden"
            // variants={slideVariantsright}
            className='w-full h-4/5 border-b-4  border-[#00b082] border-double'>
                <h1 className='font-clash text-4xl font-semibold text-start md:text-[30px] mdm:text-2xl'>250 Million + <br></br>Won.</h1>
                <h5 className='font-clash text-xl text-start mdm:text-lg'>
                Our expertise and track record of success have helped our users cumulatively win over 250 million with bet. 
                </h5>
            </div>
        </div>
        <div className='flex flex-col w-1/4 h-auto bg-[#1F1F26] text-white sm:h-4/12 sm:w-full p-8'>
        <div className='flex align-start justify-start'>
                <img className='w-14 h-14 object-contain' src={Accuracy} alt='origami'/>
            </div>
            <div 
            //   ref={ref}
            // animate={controls}
            //  initial="hidden"
            // variants={slideVariants}
            className='w-full h-4/5 border-b-4  pb-10 border-[#00b082] border-double '>
                <h1 className='font-clash text-4xl mdm:text-2xl  md:text-[30px] font-semibold text-start'>96% Accuracy.</h1>
                <h5 className='font-clash text-xl mdm:text-lg text-start'>
                Our team of experts puts in the time and effort to ensure that our subscribers receive the most reliable and accurate information available.
                </h5>
            </div>
        </div>
        <div className='flex flex-col w-1/4 h-auto bg-[#0F0F12] text-white sm:h-4/12 sm:w-full p-8'>
        <div className='flex align-start justify-start'>
                <img className='w-14 h-14 object-contain' src={Customer} alt='origami'/>
            </div>
            <div 
            //   ref={ref}
            // animate={controls}
            //  initial="hidden"
            // variants={slideVariantsright}
            
            className='w-full h-4/5 border-b-4 border-[#00b082] border-double '>
                <h1 className='font-clash text-4xl mdm:text-2xl md:text-[30px] font-semibold text-start'>Customer service.</h1>
                <h5 className='font-clash text-xl mdm:text-lg text-start'>
                We respond to any questions or concerns you may have within 24hours. 
                </h5>
            </div>
        </div>
        </div>
        <motion.div 
          ref={ref}
            animate={controls}
             initial="hidden"
            variants={squareVariants}
        
        className="flex items-center justify-center text-white w-full h-auto sm:h-auto bg-[#0F0F12] sm:w-full flex-col p-8">
           {/* <h1 className='font-clash text-3xl'>
            customer review</h1>  */}
            <h1 className='font-clash text-xl font-semibold mb-2 sm:text-xl'>Do you care to win with us ?</h1>
            <h1 className='font-clash text-3xl font-semibold mb-2 sm:text-xl'>⭐️ SUBSCRIBERS'S REVIEW ⭐️ </h1>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full">
       {REVIEW.Review.customer.map((item) =>(
      <SwiperSlide className=''>
      <div className="flex items-center justify-center w-full flex-col h-full">
      <div className="h-96 w-full smx:w-1/2 lg:w-2/5 flex flex-col justify-center items-center bg-[#333] rounded-md">
     <div className="w-full h-20 flex justify-start items-center">
     <div className="bg-[#ffa400] w-16 h-16 rounded-full ml-4 overflow-hidden">
     <img className='object-contain' src={item.Photo} alt='avatar'/>
     </div>
     </div>
      <div className="w-full shrink flex h-60 items-center bg-[#1F1F26]
      justify-center flex p-5 italic font-clash text-start sm:text-sm">" {item.Feedback} "</div>
      <div className="w-full italic text-xs h-16 flex items-end justify-end p-3 uppercase font-semibold mb-4">{item.Name}</div>
     </div>
      </div>
      </SwiperSlide>
    ))}
      </Swiper>
        </motion.div>
        {/* Subscribe section */}
       
    </div>
  )
}

export default Feature