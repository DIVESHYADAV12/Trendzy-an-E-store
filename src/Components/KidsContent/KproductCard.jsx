import React, { useContext } from 'react'
import { ProductDeatils } from '../../Context/Product'
import { Link } from 'react-router-dom'

const KproductCard = () => {
    const{kid}=useContext(ProductDeatils)
  return (
    <div className='pt-5'>
    <h1 className='text-2xl px-7 py-10'>Explore the Kids's Collection</h1>
    <div className='w-screen h-[250vh] grid grid-cols-4'>
    {kid.map((items)=>(
        <div className='h-75 w-75 p-5 '>
        <Link><img className='object-cover h-full w-full rounded hover:scale-110 transition-transform' src={items.Img} alt={items.Name} /></Link>
        <div className='text-lg p-2'>
        <h1 >{items.Name}</h1>
        <h1>₹{items.Price}</h1>
        </div>
      </div>
    ))}
    
  </div>
</div>
  )
}

export default KproductCard
