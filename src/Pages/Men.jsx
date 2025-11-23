import React, { useContext } from 'react'
import Pagetops from '../Components/MensContent/Mtop'
import MproductCard from '../Components/MensContent/MproductCard'
import { ProductDetails } from '../Context/Product'

const Men = () => {
  const{him}=useContext(ProductDetails)
  return (
    <div className=''>
      <Pagetops />
      <h1 className='text-2xl px-7 py-10'>Explore the Men's Collection</h1>
      <div className='w-screen h-[250vh] grid grid-cols-4 '>
        {him.map((items)=>{
        return ( <MproductCard key={items.id}  
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

export default Men
