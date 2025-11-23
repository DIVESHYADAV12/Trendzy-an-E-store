import React from 'react'

const OurPolicy = () => {
    return (
        <div className='flex flex-col items-center justify-around h-[40vh] w-screen text-center pt-25 leading-4'>
            <h1 className='prata-regular text-3xl'>OUR POLICY</h1>
            <div className='flex gap-20'>
                <div>
                    <img className='w-15 m-auto' src="/src/assets/exchange_icon.png" alt="" />
                    <h1 className='text-xl font-semibold py-3'>Easy Exchange</h1>
                    <p className='text-lg text-gray-600'>We offer hassel free exchange policy</p>
                </div>
                <div>
                    <img className='w-15 m-auto' src="/src/assets/quality_icon.png" alt="" />
                    <h1 className='text-xl font-semibold py-3'>7 Days Return Policy</h1>
                    <p className='text-lg text-gray-600'>We provide 7 day Free Return Policy</p>
                </div>
                <div>
                    <img className='w-15 m-auto' src="/src/assets/support_img.png" alt="" />
                    <h1 className='text-xl font-semibold py-3'>Best Customer Support</h1>
                    <p className='text-lg text-gray-600'> We provide 24/7 Customer Support</p>
                </div>
            </div>

        </div>
    )
}

export default OurPolicy
