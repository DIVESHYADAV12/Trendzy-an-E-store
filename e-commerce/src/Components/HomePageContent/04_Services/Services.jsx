import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div>
      <div className=' h-[80vh] w-screen pt-10'>
       <div className='flex justify-center'> <h1 className='text-4xl px-15 py-10 prata-regular'>TRENDZY SERVICES</h1></div>
        <div className='flex gap-7 ml-15'>
        <ServiceCard video='/src/assets/Gifts.mp4' Name='Trendzy'/>
        <ServiceCard video='/src/assets/ServiceOne.mp4' Name='Good Product'/>
        <ServiceCard video='/src/assets/ServiceTwo.mp4' Name='Looking Cool'/>
        </div>
      </div>
    </div>
  )
}

export default Services
