import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const MproductCard = ({ img, Name, Price, id }) => {
  return (
    <div className='pt-5'>
      <div>
        <div className='h-75 w-75 p-5 '>
          <Link to={`/ProductDescrip/men/${id}`}><img className='object-cover h-full w-full rounded hover:scale-110 transition-transform' src={img} alt={Name} /></Link>
          <div className='text-lg p-2'>
            <h1 >{Name}</h1>
            <h1>₹{Price}</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MproductCard
