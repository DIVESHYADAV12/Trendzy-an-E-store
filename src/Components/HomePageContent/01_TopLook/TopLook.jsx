import React from 'react'
import { Link, Links } from 'react-router-dom'

const TopLook = () => {
  return (
    <div className='relative pt-19'>
      <img
        className='w-screen h-[80vh]'
        src="/src/assets/TopLook.avif" alt="" />
      <div>
        <div className='z-30'>
        <h3 className='absolute top-22 left-5 flex gap-3 px-15 z-20  '>
          <Link className='active:scale-95 text-lg hover:underline cursor-pointer' to='/Women'>Women</Link>
          <Link className='active:scale-95 text-lg hover:underline cursor-pointer' to='/Men'>Men</Link>
          <Link className='active:scale-95 text-lg hover:underline cursor-pointer' to='/Kids'>Kids</Link>
        </h3>
        
        </div>
        <div className='absolute inset-0 pt-100 z-10'>
          <h1 className='text-5xl px-15 font-bold prata-regular'>Strats with the basics</h1>
          <div className='px-15 py-5 flex gap-3 '>
            <Link to='/Women' className='bg-amber-100 px-2 py-2 rounded-xl active:scale-95'>Shop Women</Link>
            <Link to='/Men' className='bg-amber-100 px-2 py-2 rounded-xl active:scale-95'>Shop Man</Link>
            <Link to='/Kids' className='bg-amber-100 px-2 py-2 rounded-xl active:scale-95'>Shop Kid</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopLook
