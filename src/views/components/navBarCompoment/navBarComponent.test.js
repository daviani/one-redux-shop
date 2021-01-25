import { render, screen } from '@testing-library/react'
import Navbar from './navBarComponent'

// eslint-disable-next-line no-undef
test('hello world', () => {
  render(<Navbar />)
  const linkElement = screen.getByText(/hello world/i)
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument()
})
