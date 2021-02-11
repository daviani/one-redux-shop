import React from 'react'
import ListProducts
  from '../../components/listProducts/listProductsComponent'

const ProductsPage = props => {
  const { isFiltering, filtered, products, category } = props
  return (
    <section className='container mt-20'>
      <div className='flex flex-wrap'>
        <ListProducts data={isFiltering ? filtered :products[category] }  />
      </div>
    </section>
  )
}

export default ProductsPage
