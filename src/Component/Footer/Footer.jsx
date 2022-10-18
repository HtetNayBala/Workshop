import React from 'react'
import {FaAccusoft,FaAffiliatetheme,FaAviato,FaContao,FaEarlybirds} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-auto'>
        <div className='text-center mb-3'>
            <p className='font-semibold'>Trusted by over 5 very small average businesses</p>
        </div>
        <div className='space-y-2 sm:space-y-0 flex flex-wrap items-center w-[80%] sm:w-[70%] md:w-[100%] mx-auto justify-between'>
            <div className='text-gray-500 space-x-2 flex items-center'>
                <FaAccusoft className='text-2xl'/>
                <h4 className='text-uppercase text-2xl font-bold'>Tuple</h4>
            </div>
            <div className='text-gray-500 space-x-2 flex items-center'>
                <FaAffiliatetheme className='text-2xl'/>
                <h4 className='text-uppercase text-2xl font-semibold'>Mirage</h4>
            </div>
            <div className='text-gray-500 space-x-2 flex items-center'>
                <FaAviato className='text-2xl'/>
                <h4 className='text-uppercase text-2xl font-bold'>StaticKit</h4>
            </div>
            <div className='text-gray-500 space-x-2 flex items-center'>
                <FaContao className='text-2xl'/>
                <h4 className='text-uppercase text-2xl font-semibold'>Transistor</h4>
            </div>
            <div className='text-gray-500 space-x-2 flex items-center'>
                <FaEarlybirds className='text-2xl'/>
                <h4 className='text-uppercase text-2xl font-semibold'>Workcation</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer