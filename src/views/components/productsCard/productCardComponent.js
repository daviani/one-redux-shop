import React, { useState } from 'react'
import ProductModal from '../productModal/productModalComponent'

const ProductsCard = props => {
  const { item } = props
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className='my-8 px-8 overflow-hidden sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3'>
        <div
          className='card flex flex-col m-2 p-5 bg-white border border-gray-200 rounded-md shadow-md'>
          <p className='text-2xl uppercase text-purple-800 font-bold'>
            {item.name}
          </p>
          <p className='uppercase text-sm text-gray-400'>
            {item.ref}
          </p>
          <img
            className='mr-auto ml-auto'
            width='170'
            height='170'
            src={process.env.PUBLIC_URL +
            `/assets/${item.category}/${item.image}`}
            alt={item.name}
          />
          <div
            className='flex flex-col  md:flex-row justify-between items-center text-gray-900'>
            <p className='font-bold text-xl'>{item.price} €</p>
            <button
              className='px-6 py-2 uppercase shadow-md rounded-md border-2 border-purple-800 text-purple-800 cursor-pointer focus:outline-none hover:bg-purple-800 hover:text-white'
              onClick={() => setShowModal(true)}
              data-target={`#${item.ref}`}
            >
              More details
            </button>
            <ProductModal
              item={item}
              showModal={showModal}
              setShowModal={setShowModal}
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsCard
