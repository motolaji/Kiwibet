import React from 'react'
import Top from './images/top.svg'

const Mobile = () => {
  return (
    <div  section id="mobile" className='bg-[#0F0F12] w-screen h-auto sm:h-screen flex justify-center items-center p-2 relative'>
    <div className='bg-[#0F0F12] h-[80%] w-[76%] flex justify-center items-center sm:flex-col md:flex-col lg:flex-row sm:pl-3 sm:pr-3'>
    <h1 className='uppercase font-clash text-3xl sm:text-2xl text-white font-semibold md:text-start md:m-6 lg:text-end sm:text-start sm:absolute xsml:top-[10%] xsm:top-[20%] max-w-[70%] sm:p-2' >KIWIBET Mobile application, get latest sport information all in one place
    <br></br>coming soon. </h1>
    <img className='h-96 w-96 smx:m-10 sm:absolute sm:top-[42%] max-w-[70%] sm:p-3' src={Top} alt='avatar'/>
    </div>
    </div>
  )
}

export default Mobile