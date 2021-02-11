import React from 'react'

const ProductModal = ({ item, showModal, setShowModal }) => {

  return (
    <>
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-2/3 my-6 mx-auto max-w-sm'>
              <div
                className='border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
                <div
                  className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'
                >
                  <h3 className='text-3xl font-semibold text-purple-800'>
                    {item.name}
                  </h3>
                  <button
                    className='p-1 ml-auto float-right text-red-600 text-2xl'
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>

                <div className='relative p-6 flex-auto text-center'>
                  <img
                    className='mr-auto ml-auto'
                    width='230'
                    height='230'
                    src={process.env.PUBLIC_URL +
                    `/assets/${item.category}/${item.image}`}
                    alt={item.name}
                  />
                  <p className='my-4 text-gray-600 text-lg leading-relaxed'>
                    {item.ref}
                  </p>
                  <br/>
                  <span
                    className='flex flex-row mt-1 h-10 rounded-sm relative bg-transparent'>
                    <button
                      className='bg-gray-300 text-2xl text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer '
                    >
                      −
                    </button>
                    <p
                      className='bg-gray-300 w-8 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'>
                      0
                    </p>
                    <button
                      className='bg-gray-300 text-2xl text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-r cursor-pointer'
                    >
                      +
                    </button>
                  </span>
                </div>

                <div
                  className='flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b'>
                  <button
                    className='px-6 py-3 w-full bg-purple-700 text-white font-bold uppercase text-sm rounded-sm shadow hover:shadow-lg hover:bg-purple-500  focus:outline-none'
                    type='button'
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-30'/>
        </>
      ) : null}
    </>
  )
}

export default ProductModal
