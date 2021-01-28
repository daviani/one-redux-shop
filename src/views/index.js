import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navBarCompoment/navBarComponent'
import HomePage from './pages/homePage/homePage'

function App () {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={HomePage} />
    </Router>
  )
}

export default App
