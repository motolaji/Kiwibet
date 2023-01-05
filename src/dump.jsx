import React from 'react'
import Origami from './images/Origami.svg'
import Badge from './images/Badge.svg'
import World from './images/Worldwide.svg'


const Feature = () => {
  return (
    <div className='w-screen h-screen flex justify-center align-center flex-col sm:h-[200vh]'>
        <div className='w-full h-[50vh] bg-white flex sm:h-full sm:w-screen sm:flex-col '>
        <div className='flex flex-col shrink w-4/12 h-full bg-teal-200 sm:h-4/12 sm:w-full p-10 '>
            <div className='w-full h-2/6'>
                <img className='w-32 h-32' src={Origami} alt='origami'/>
            </div>
            <div className='w-full h-4/6 border-b-4 border-white'>
                <h1 className='font-clash text-4xl font-semibold text-start'>Heading to some text.</h1>
                <h5 className='font-clash text-xl text-start'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui, omnis reprehenderit eveniet quaerat natus
                </h5>
            </div>
        </div>
        <div className='flex flex-col w-4/12 h-full bg-red-200 sm:h-4/12 sm:w-full p-10'>
        <div className='w-full h-2/6'>
                <img className='w-32 h-32' src={Badge} alt='origami'/>
            </div>
            <div className='w-full h-4/6 border-b-4 border-white'>
                <h1 className='font-clash text-4xl font-semibold text-start'>Heading to some text.</h1>
                <h5 className='font-clash text-xl text-start'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui, omnis reprehenderit eveniet quaerat natus
                </h5>
            </div>
        </div>
        <div className='w-4/12 h-full bg-blue-200 sm:h-4/12 sm:w-full p-10'>
        <div className='w-full h-2/6 bg-red-600 sm:h-3/12'>
                <img className='w-32 h-32' src={World} alt='origami'/>
            </div>
            <div className='w-full h-4/6 border-b-4 border-white bg-red-400 sm:h-6/12'>
                <h1 className='font-clash text-4xl font-semibold text-start'>Heading to some text.</h1>
                <h5 className='font-clash text-xl text-start sm:lg'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui, omnis reprehenderit eveniet quaerat natus 
                </h5>
            </div>
        </div>
        </div>
        <div section id="Subscribe" className="w-full h-[50vh] sm:h-full sm:w-screen">
            subscribe
        </div>
    </div>
  )
}

export default Feature