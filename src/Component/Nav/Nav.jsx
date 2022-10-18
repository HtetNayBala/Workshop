import React, { useState } from 'react'
import tail from '../../img/logo.png'
import {BsList,BsChevronDown,BsX} from 'react-icons/bs'
import ShowList from '../List/ShowList';
import Dropdown from '../Dropdown/Dropdown';

const Nav = () => {

    const [state,setState] = useState(false);

    const handleState = () => {
        setState(pre=>!pre);
    }

    const [dropdownState,setDropdownState] = useState(false);
    
    const handleDropdownState = ()=>{
        setDropdownState(pre=>!pre);
    }

  return (
    <div>
        <div className='hidden md:flex items-center justify-between'>
            <div>
                <img src={tail} alt="" className='w-[50px]'/>
            </div>
            <div>
                <ul className='flex items-center space-x-5 md:space-x-3'>
                    <li onClick={handleDropdownState} className='flex items-center space-x-2 text-gray-400 relative'><a href="#" className='text-xl text-gray-400 font-semibold hover:text-gray-600'>Solution</a> 
                    <BsChevronDown/> 
                    {dropdownState ? <Dropdown className={'scale-y-[1] duration-500 right-[-30%] top-[120%]'}/> : <Dropdown className={'scale-y-0 duration-500 right-[-30%] top-[120%]'}/> }
                    </li>
                    <li><a href="#" className='hover:text-gray-600 text-xl text-gray-400 font-semibold'>Pricing</a></li>
                    <li><a href="#" className='hover:text-gray-600 text-xl text-gray-400 font-semibold'>Partner</a></li>
                    <li><a href="#" className='hover:text-gray-600 text-xl text-gray-400 font-semibold'>Company</a></li>
                </ul>
            </div>
            <div className='space-x-3'>
                <button className='text-xl font-semibold text-gray-400 hover:text-gray-600'>Sing in</button>
                <button className='btn-primary text-xl font-semibold'>Sing in</button>
            </div>
        </div>
        {/* for sm device */}
        <div className='flex md:hidden items-center justify-between'>
            <div>
                <img src={tail} alt="" className='w-[50px]'/>
            </div>
            <div className='space-x-3'>
                <button className='text-xl font-semibold text-gray-400'>Sing in</button>
                <button className='btn-primary text-xl font-semibold'>Sing in</button>
            </div>
            <div>
                {
                    state ?  <BsX onClick={handleState} className='text-xl'/> : <BsList className='text-xl' onClick={handleState}/>
                }
            </div>
        </div>
            {
                state && <ShowList handleDropdownState={handleDropdownState} dropdownState={dropdownState}/>
            }
            
    </div>
  )
}

export default Nav