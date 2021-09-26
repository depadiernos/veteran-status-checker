import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/New Patient:/i)
    expect(document.body.contains(linkElement))
  })
})
