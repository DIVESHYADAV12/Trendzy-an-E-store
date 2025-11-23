import React from 'react'

const ServiceCard = ({video,Name}) => {
  return (
    <div>
      <div >
      <video src={video}
      className='h-90 w-93  object-cover'
      autoPlay 
      loop 
      muted></video>
       <div className='flex justify-center py-2'><h1 className='text-2xl'>{Name}</h1></div>
      </div>
     
    </div>
  )
}

export default ServiceCard
