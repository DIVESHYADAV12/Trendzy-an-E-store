import React, { useContext } from 'react'
import Ktop from '../Components/KidsContent/Ktop'
import KproductCard from '../Components/KidsContent/KproductCard'
import { ProductDetails } from '../Context/Product'

const Kids = () => {
  const { kid } = useContext(ProductDetails)

  return (
    <div className='bg-white'>
      <Ktop />
      <h1 className='text-2xl px-7 py-10'>Explore the Kid's Collection</h1>

      <div className='w-screen h-[250vh] grid grid-cols-4'>
      {kid.map((items)=>{
        return ( <KproductCard key={items.id}  
        img={items.Img} 
        Name={items.Name} 
        Price={items.Price}
        id={items.id}/>)
      }          
        )}
      </div>
    </div>
  )
}

export default Kids
