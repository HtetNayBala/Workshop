import {BsChevronDown} from 'react-icons/bs'
import Dropdown from '../Dropdown/Dropdown'

const ShowList = ({handleDropdownState,dropdownState}) => {
  return (
    <div>
        <ul className='mt-3 flex flex-col md:space-x-3 bg-white'>
                <li onClick={handleDropdownState} className='space-x-2 relative mb-2 p-2 rounded bg-gray-400 flex items-center'><a href="#" className='text-xl text-white font-semibold'>Solution</a> <BsChevronDown className='text-white'/>
                {dropdownState ? <Dropdown className={'scale-y-[1] duration-500 right-[50%] sm:right-[70%] top-[80%]'}/> : <Dropdown className={'scale-y-0 duration-500 right-[50%] sm:right-[70%] top-[80%]'}/> }
                </li>
                <li className='mb-2 p-2 rounded bg-gray-400 text-white'><a href="#" className=' text-xl text-white font-semibold'>Pricing</a></li>
                <li className='mb-2 p-2 rounded bg-gray-400 text-white'><a href="#" className=' text-xl text-white font-semibold'>Partner</a></li>
                <li className='mb-2 p-2 rounded bg-gray-400 text-white'><a href="#" className=' text-xl text-white font-semibold'>Company</a></li>
        </ul> 
    </div>
  )
}

export default ShowList