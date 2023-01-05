import React from 'react'
import Origami from './images/Origami.svg'
import Badge from './images/Badge.svg'
import World from './images/Worldwide.svg'
import Sophia from './images/Sophia Animation.gif'


const Feature = () => {
  return (
    <div className='w-screen flex justify-center align-center flex-col '>
    {/* features */}
    <div section id="Subscribe" className="flex items-center justify-center text-white w-full h-[60vh] sm:h-auto bg-[#0F0F12] sm:w-screen sm:flex-col overflow-scroll p-8"
        style={{
       backgroundImage: `url(https://assets.website-files.com/624f34ee3b91afefdf14076f/624f8a14314de6afdb6b32c0_image-mesh-hero-blockchain-template.svg)`,
       backgroundSize: 'cover',
    }} 
    >
            <div className='w-6/12 h-full sm:h-6/12 sm:w-full flex justify-center items-center'>
            <img className='w-[450px] sm:w-full sm:h-[50%] rounded h-[480px]' src={Sophia} alt='sophia'/>
            </div>
            <div className='w-6/12 h-full flex items-start flex-col justify-center sm:h-auto sm:w-full smx:pl-8'>
                <h1 className="text-4xl font-semibold font-clash text-start mb-5">Heading to some text about with Sophia</h1>
                <h5 className="text-lg font-clash text-start mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla laborum aperiam reprehenderit doloremque repellat adipisci officiis possimus.
                </h5>
                <button className="w-32 h-10 bg-[#00b082] rounded hover:bg-white hover:text-[#00b082] font-clash font-semibold text-white">Example</button>
            </div>
        </div>
        <div className='w-full bg-white flex sm:w-screen sm:flex-col '>
        <div className='flex flex-col w-1/3 h-auto bg-[#333] text-white sm:h-4/12 sm:w-full p-8 '>
            <div className=''>
                <img className='w-32 h-32' src={Origami} alt='origami'/>
            </div>
            <div className='w-full h-4/6 border-b-4  border-[#00b082] border-double'>
                <h1 className='font-clash text-4xl font-semibold text-start mdm:text-2xl'>Heading to some text.</h1>
                <h5 className='font-clash text-xl text-start mdm:text-lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui, omnis reprehenderit eveniet quaerat natus
                </h5>
            </div>
        </div>
        <div className='flex flex-col w-1/3 h-auto bg-[#1F1F26] text-white sm:h-4/12 sm:w-full p-8'>
        <div className=''>
                <img className='w-32 h-32' src={Badge} alt='origami'/>
            </div>
            <div className='w-full h-4/6 border-b-4  border-[#00b082] border-double'>
                <h1 className='font-clash text-4xl font-semibold text-start mdm:text-2xl'>Heading to some text.</h1>
                <h5 className='font-clash text-xl text-start mdm:text-lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui, omnis reprehenderit eveniet quaerat natus
                </h5>
            </div>
        </div>
        <div className='flex flex-col w-1/3 h-auto bg-[#0F0F12] text-white sm:h-4/12 sm:w-full p-8'>
        <div className='flex align-start justify-start'>
                <img className='w-32 h-32 object-contain' src={World} alt='origami'/>
            </div>
            <div className='w-full h-4/6 border-b-4 border-[#00b082] border-double '>
                <h1 className='font-clash text-4xl mdm:text-2xl font-semibold text-start'>Heading to some text.</h1>
                <h5 className='font-clash text-xl mdm:text-lg text-start'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui, omnis reprehenderit eveniet quaerat natus
                </h5>
            </div>
        </div>
        </div>
        {/* Subscribe section */}
       
    </div>
  )
}

export default Feature