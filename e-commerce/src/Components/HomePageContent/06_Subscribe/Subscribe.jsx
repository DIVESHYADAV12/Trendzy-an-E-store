import React from 'react'

const Subscribe = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault()
    }
  return (
    <div className='text-center pt-20'>
      <p className='text-2xl pb-1'>Subscribe Now & Get 20% off</p>
      <p className='text-lg pb-7 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quam.</p>

      <form onSubmit={onSubmitHandler}  className='w-[40vw] items-center mx-auto border pl-3 flex gap-3'>
        <input className='w-full' type="email" placeholder='Enter your emial' required />
        <button type='submit' className='p-2 bg-black text-white'>Subscribe</button>
      </form>
    </div>
  )
}

export default Subscribe
