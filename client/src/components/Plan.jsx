import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
    return (
        <div className='mx-auto z-20 max-w-2xl my-30'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Choose your plan</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>
                    Start with our free plan and upgrade as you grow. Find the perfect option for your needs.
                </p>
            </div>
            <div className='mt-10 max-sm:mx-8'>
                <PricingTable />
            </div>
        </div>



    )
}

export default Plan
