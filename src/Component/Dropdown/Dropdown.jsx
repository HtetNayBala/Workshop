import React from 'react'

const Dropdown = ({className}) => {
  return (
    <div>
        <div className={`${className} duration-500 bg-gray-200 p-3 w-[150px] rounded scale-y-0 origin-top absolute z-[2]`}>
            <ul className='space-y-2'>
                <li className='bg-gray-400 px-1 rounded-sm text-white'><a href="#">Home</a></li>
                <li className='bg-gray-400 px-1 rounded-sm text-white'><a href="#">Contact</a></li>
                <li className='bg-gray-400 px-1 rounded-sm text-white'><a href="#">About</a></li>
                <li className='bg-gray-400 px-1 rounded-sm text-white'><a href="#">Service</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown