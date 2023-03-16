import React from 'react'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import telegram from './images/telegram-app.svg'

const Footer = () => {

  const Year = new Date().getFullYear()
  //  console.log(Year)  
  return (
    <div className='w-screen h-[10vh] flex justify-center items-center  font-clash font-semibold text-white text-base flex-col bg-[#1F1F26]'>
   <div className='flex-row flex space-x-10 justify-center items-center mb-2'>
   <a href="https://twitter.com/kiwibet01?t=Ydxcdot13i4CD3OTgMQRqw&s=09"><img className='w-[20px] h-[20px] object-contain' src={twitter} alt='twitter'/></a>
    <a href="https://t.me/+Upva20gETjhAsb5N"><img className='w-[20px] h-[20px] object-contain' src={telegram} alt='telegram'/></a>
    <a href="https://instagram.com/kiwibet01?igshid=YmMyMTA2M2Y="><img className='w-[20px] h-[20px] object-contain' src={instagram} alt='instagram'/></a>
   </div>
   <div>© {Year} Kiwibet.</div>
    </div>
  )
}

export default Footer 