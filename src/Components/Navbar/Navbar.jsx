import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductDetails } from '../../Context/Product'

const Navbar = () => {
  const [visible, setVisible] = useState("false")
  const {setShowSearch} = useContext(ProductDetails)
  return (
    <div className='flex bg-white justify-between w-full z-50 px-10 py-5 fixed'>
      <div className='prata-regular flex justify-center items-center text-3xl'>TRENDZY</div>
      <div className='text-m items-center flex justify-center px-10 gap-5 text-gray-600'>
        <Link to='/' className=' flex flex-col items-center hover:scale-105 transition-transform'>
          <p className='hover:text-black'>Home</p>
        </Link>
        <Link to='/Login' className=' flex flex-col items-center hover:scale-105 transition-transform'>
          <p className='hover:text-black'>Login</p>
        </Link>
        <Link to='/Contact' className=' flex flex-col items-center hover:scale-105 transition-transform'>
          <p className='hover:text-black'>Contact</p>
        </Link>
        <Link className=' flex flex-col items-center hover:scale-105 transition-transform'>
          <p className='hover:text-black'>About</p>
        </Link></div>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src="/src/assets/search_icon.png" className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <img src="/src/assets/profile_icon.png" className='w-5 cursor-pointer' alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 text-gray-600 bg-slate-100 w-35 items-center rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/Cart' className='relative'>
          <img className='w-5 cursor-pointer' src="/src/assets/cart_icon.png" alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 rounded-full text-center bg-black text-white leading-4 aspect-square text-[8px]'> 10</p>
        </Link>
        {/* <img onClick={()=>{setVisible(true)}} src="/src/assets/menu_icon.png" className='w-5 cursor-pointer' alt="" /> */}
      </div>
      {/* Slide Bar Menu */}
      {/* <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${visible ? 'w-full' : 'w-0'}`}>

        </div> */}
    </div>
  )
}

export default Navbar
