import React from 'react'

function HomePage () {
  return (
    <div
      className='flex content-center mt-28 p-6 text-center max-w-xl mx-auto my-auto bg-gray-100 rounded-md shadow-md lg:py-16 lg:px-8'>
      <div className='px-2'>

        <h1 className='text-center text-4xl lg:text-5xl my-3 lg:mt-4'>
          Hello, world!
        </h1>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aliquid autem dolore dolorem ea inventore molestiae
          nemo neque non, quidem recusandae soluta tenetur! Aut eaque,
          placeat!
        </p>
        <button
          className='bg-purple-800 text-white py-2 px-4 rounded-md mt-6 transition-colors duration-300 hover:text-white hover:shadow-md hover:bg-purple-600 lg:mt-12 lg:py-3 lg:px-6 '>
          View our products
        </button>
      </div>
    </div>
  )
}

export default HomePage
