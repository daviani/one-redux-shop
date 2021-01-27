import { render, screen } from '@testing-library/react'
import Navbar from './navBarComponent'

test('should display greeting message', () => {
  // when
  render(<Navbar/>)

  // then
  const linkElement = screen.getByText( /OneReduxShop/i )
  expect(linkElement).toBeInTheDocument()
})
