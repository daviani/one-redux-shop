import React from 'react'
import ProductCard
  from '../../components/productsCardComponent/productCardComponent'

const ListProducts = props => {
  const { data } = props

  return (
    <>
      {data.map(
        item =>
          <ProductCard key={item.ref}
                       item={item}
          />,
      )}
    </>
  )
}

export default ListProducts
