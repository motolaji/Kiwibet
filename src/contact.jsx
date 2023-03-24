import React from 'react'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import telegram from './images/telegram-app.svg'

const Contact = () => {
  return (
<div session id="Contact" className='bg-[#0F0F12] w-screen h-auto'>
<h1 className="font-clash font-semibold text-white text-4xl pt-4">Get in touch 👋🏽 </h1> 
<div className='flex-col flex font-clash font-regular text-white space-y-10 justify-center items-start ml-12 p-6'>
   <a className='border-b-4  border-[#00b082]' href="https://twitter.com/kiwibet01?t=Ydxcdot13i4CD3OTgMQRqw&s=09"><img className='w-[20px] h-[20px] object-contain' src={twitter} alt='twitter'/>Reach out to us on twitter</a>
    <a  className='border-b-4  border-[#00b082]' href="https://t.me/+Upva20gETjhAsb5N"><img className='w-[20px] h-[20px] object-contain' src={telegram} alt='telegram'/>Reach out to us on telegram</a>
    <a  className='border-b-4  border-[#00b082]' href="https://instagram.com/kiwibet01?igshid=YmMyMTA2M2Y="><img className='w-[20px] h-[20px] object-contain' src={instagram} alt='instagram'/>Reach out to us on instagram</a>
   </div>
</div>
  )
}

export default Contact