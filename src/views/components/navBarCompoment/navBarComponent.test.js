import { render, screen } from '@testing-library/react'
import Navbar from './navBarComponent'

test('should display greeting message', () => {
  // when
  render(<Navbar/>)

  // then
  const linkElement = screen.getByText( /hello world/i )
  expect(linkElement).toBeInTheDocument()
})
