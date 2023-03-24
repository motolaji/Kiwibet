import React from 'react'


const Footer = () => {

  const Year = new Date().getFullYear()
  //  console.log(Year)  
  return (
    <div className='w-screen h-[10vh] flex justify-center items-center  font-clash font-semibold text-white text-base flex-col bg-[#1F1F26]'>
   <div>© {Year} Kiwibet.</div>
    </div>
  )
}

export default Footer 