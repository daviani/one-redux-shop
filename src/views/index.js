import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navBarCompoment/navBarComponent'
import HomePage from './pages/homePage/homePage'
import ProductsPage from './pages/productsPage/productsPage'
import CartPage from './pages/cartPage/cartPage'
import NotFoundPage from './pages/notFoundPage/notFoundPage'


function App () {
  return (
    <Router>
      <NavBar />
      <Route path='/cart' component={CartPage}  />
      <Route path='/products' component={ProductsPage} />
      <Route exact path='/' component={HomePage} />
      <Route components={NotFoundPage} />
    </Router>
  )
}

export default App
