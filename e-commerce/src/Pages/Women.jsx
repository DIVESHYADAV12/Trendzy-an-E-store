import React, { useContext } from 'react'
import Wtop from '../Components/WomensContent/Wtop'
import WproductCard from '../Components/WomensContent/WproductCard'
import { ProductDeatils } from '../Context/Product'

const Women = () => {
  const{her}=useContext(ProductDeatils)
  return (
    <div className='bg- white'>
      <Wtop/>
      <h1 className='text-2xl px-7 py-10'>Explore the Women's Collection</h1>
      <div className='w-screen h-[250vh] grid grid-cols-4 '>
        {her.map((items)=>{
        return ( <WproductCard key={items.id}  
        img={items.Img} 
        Name={items.Name} 
        Price={items.Price}/>)
      }          
        )}
      </div>
    </div>
  )
}

export default Women
