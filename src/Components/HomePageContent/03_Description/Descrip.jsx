import React from 'react'
import { Link } from 'react-router-dom'

const descrip = () => {
  return (
    <div className='w-screen h-screen bg-amber-50 flex items-center '>
      <div className='w-1/2 flex items-center'>
      <video 
      className='px-15 h-150 w-200 object-cover '
      autoPlay 
      loop 
      muted
       src="/src/assets/First.mp4"></video>
       </div>
       <div className='flex flex-col w-1/2 gap-15'>
        <h1 className='text-6xl prata-regular '>Trendzy</h1>
        <h1 className=' text-xl text-justify  pr-10'>Trendzy is our special curated collection for online gift shoppers. We provide a wide variety of unique and fun gifts for every occasion, ensuring that your loved ones get something memorable and meaningful. Perfect for birthdays, anniversaries, and celebrations, Trendzy brings joy in every package!</h1>
        <Link className='underline text-xl active:scale-95 transition-transform px-8 py-3' to='/Men'>Keep Discovering </Link>
       </div>

    </div>
  )
}

export default descrip
