import React from 'react'
import './navBarComponents.css'

function NavBar () {
  return (
    <nav>
      <header
        className='border-b sticky top-0 bg-white z-10 md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4'>
        <div className='flex items-center justify-between mb-4 md:mb-0'>
          <a
            href='/'
            className='leading-none'
          >
            <div className='flex'>
              <p
                className='no-underline text-gray-600 text-2xl text-bold  hover:text-purple-800'
              >
                OneReduxShop
              </p>
            </div>
          </a>
          <ul className=' ml-6 flex'>
            <li className='toggleable '>
              <input type="checkbox" value="selected" id="toggle-one"
                     className="toggle-input"/>
              <label htmlFor="toggle-one"
                     className='block cursor-pointer px-4 text-gray-600 text-2xl'>Products</label>
              {/* eslint-disable-next-line jsx-a11y/aria-role */}
              <div role="toggle"
                   className="p-3 mega-menu mb-12 sm:mb-0 shadow-xl bg-purple-800">
                <div
                  className="container mx-auto w-full mx-2">
                  <ul
                    className='px-4 border-gray-600 pb-6 pt-6 flex flex-row space-between'>
                    <li >
                      <a href='/'
                         className='block p-3 text-gray-300 text-bold hover:text-white hover:bg-purple-600'>
                        Fruits
                      </a>
                    </li>
                    <li >
                      <a href='/'
                         className='block p-3 text-gray-300 text-bold hover:text-white hover:bg-purple-600'>
                        Vegetables
                      </a>
                    </li>
                    <li >
                      <a href='/'
                         className='block p-3 text-gray-300 text-bold hover:text-white hover:bg-purple-600'>
                        Fresh products
                      </a>
                    </li>
                    <li >
                      <a href='/'
                         className='block p-3 text-gray-300 text-bold hover:text-white hover:bg-purple-600'>
                        Grocery
                      </a>
                    </li>
                    <li >
                      <a href='/'
                         className='block p-3 text-gray-300 text-bold hover:text-white hover:bg-purple-600'>
                        Drinks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <form className='mb-4 mr-14 w-full md:mb-0 md:w-1/4'>
          <input
            className='bg-grey-lightest border-2  p-2 rounded-lg shadow-inner w-full'
            placeholder='Search...'
            aria-label='Search...'
            type='search'
          />
        </form>
        <nav>
          <a href='/'>
            <button
              className='bg-purple-800 text-white p-2 rounded  leading-none flex items-center'>
              Cart
              <span
                className='bg-white p-1 rounded-full text-green-700 text-xs ml-2 text-bold'>
                0
              </span>
            </button>
          </a>
        </nav>
      </header>
    </nav>
  )
}

export default NavBar
