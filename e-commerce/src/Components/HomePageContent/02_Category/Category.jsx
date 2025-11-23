import React from 'react'
import Categorycard from './Categorycard'

const Category = () => {
  return (
    <div>
      <div className=' h-[75vh] w-screen'>
        <h1 className='text-3xl px-15 py-10 prata-regular'>Shop by Category</h1>
        <div className='flex gap-7 ml-15'>
        <Categorycard image="src/assets/Mcategory.jpg" linkname="Men" route="/Men"/>
        <Categorycard image="src/assets/Wcategory.jpg" linkname="Women" route="/Women"/>
        <Categorycard image="src/assets/Kcategory.jpg" linkname="Kids" route="/Kids"/>
        </div>
      </div>
    </div>
  )
}

export default Category
