import React from 'react'

const Home = () => {
  return (
    <div className='my-5 px-2'>
        <div className='py-3 after:w-[100%] after:h-[100%] after:bg-blue-900 after:absolute relative after:opacity-80 flex flex-col items-center justify-center after:rounded-xl rounded-xl home min-h-[80vh] sm:min-h-[70vh] bg-no-repeat bg-center bg-cover'>
            <div className='w-[100%] sm:w-[50%] text-center mx-auto z-[1]'>
                <h2 className='text-5xl md:text-6xl text-white font-bold'>Take control of your <span className='text-blue-100'>customer support</span></h2>
            </div>
            <div className='w-[90%] sm:w-[60%] text-center mx-auto my-5 z-[1]'>
                <p className='text-gray-200'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nesciunt vel ea iusto officiis vero deleniti sit maiores mollitia autem.
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className='space-x-3 z-[1]'>
                <button className='btn-white text-blue-500'>Get Started</button>
                <button className='btn-primary'>Live Demo</button>
            </div>
        </div>
    </div>
  )
}

export default Home