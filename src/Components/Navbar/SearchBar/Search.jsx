import React, { useContext, useState } from 'react'
import  { ProductDetails } from '../../../Context/Product'

const search = () => {
  const {search,setSearch,showSearch,setShowSearch  } = useContext(ProductDetails)
  return showSearch ? (
    <div className='border-b border-t bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border rounded-full w-3/4 border-gray-400 px-5 py-3 mx-5 my-4'>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search' value={search} className='flex-1 outline-none bg-inherit text-sm'/>
        <img src="/src/assets/search_icon.png" className='w-4' alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='w-3 inline cursor-pointer' src="/src/assets/cross_icon.png" alt="" />
    </div>
  ) : null
}

export default search
