import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navBarCompoment/navBarComponent'
import HomePage from './pages/homePage/homePage'
import ProductsPage from './pages/productsPage/productsPage'
import CartPage from './pages/cartPage/cartPage'
import NotFoundPage from './pages/notFoundPage/notFoundPage'
import { products } from '../data/products'

function App () {
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState(false)

  const loadCategory = i => {setCategory(i)}
  const filterResults = input => {
    let fullListProducts = products.flat()
    let results = fullListProducts.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }
  console.log(filterResults)

  return (
    <Router>
      <NavBar filter={filterResults}
              setFiltering={setFiltering}/>

      <Route path='/cart' component={CartPage}/>
      <Route path='/products' component={ProductsPage}/>
      <Route exact path='/' component={HomePage}/>
      <Route components={NotFoundPage}/>
    </Router>
  )
}

export default App
