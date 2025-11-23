import React from 'react'
import { Link } from 'react-router-dom'

const End = () => {
  return (
    <div className='bg-black h-[95vh] w-screen text-white mt-40'>
      <div className='flex flex-col justify-center items-center pt-20 gap-10 text-center'>
        <h1 className=' text-4xl '>SIGN UP FOR LEVEL UPDATES</h1>
        <div>
            <h1 className='text-2xl ' >Get exclusive updates on the collection's launch,</h1>
            <h1 className='text-2xl '> personalized communication and the House's latest news.</h1>
        </div>
        <div>
        <Link className='text-2xl hover:text-gray-400 transition font-medium' to='/Contact'>+ Contact</Link>
        </div>
        <div>
            <h1 className='text-5xl sm:text-7xl md:text-9xl font-sans text-center my-10'>T R E N D Z Y</h1>
        </div>
        <p className="text-center bg-black text-sm sm:text-base text-gray-400 mt-10">© 2025 Trendzy. All Rights Reserved.</p>
      </div>
     
    </div>
  )
}

export default End
