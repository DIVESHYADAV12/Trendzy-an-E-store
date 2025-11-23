import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Caegorycard = ({image,linkname,route,Id}) => {
  return (
    <div>
      <div className='relative transition-transform hover:scale-105'>
                <a href={route}><img
                className='h-90 w-93  object-cover  rounded'
                src={image} alt="" /></a>
                <a href={route} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 px-8 py-3 rounded font-semibold '>{linkname}</a>
            </div>
    </div>
  )
}

export default Caegorycard
