import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

const mockPatient = {
  first_name: 'Tamara',
  middle_name: 'E',
  last_name: 'Ellis',
  gender: 'F',
  birth_name: '1967-06-19',
  ssn: 796130115
}

it('does not submit an empty form', () => {
  const result = ''
  const setResult = jest.fn()
  const handleSubmit = jest.fn(e => e.preventDefault())
  const testApp = render(<Form {...{ handleSubmit, result, setResult }} />)
  fireEvent.click(testApp.getByText('Submit'))
  expect(testApp.getByLabelText('First Name:').checkValidity()).toBe(false)
})
it('submits a filled form', () => {
  const result = ''
  const setResult = jest.fn()
  const handleSubmit = jest.fn(e => e.preventDefault())
  const testApp = render(<Form {...{ handleSubmit, result, setResult }} />)
  const firstName = testApp.getByLabelText('First Name:')
  userEvent.type(firstName, 'Tamara')
  const lastName = testApp.getByLabelText('Last Name:')
  userEvent.type(lastName, 'Ellis')
  const birthDate = testApp.getByLabelText('Date of Birth:')
  userEvent.type(birthDate, '1967-06-19')
  const ssn = testApp.getByLabelText('SSN:')
  userEvent.type(ssn, '796-13-0115')
  fireEvent.click(testApp.getByText('Submit'))
  expect(testApp.getByLabelText('First Name:').checkValidity()).toBe(true)
  expect(testApp.getByLabelText('Last Name:').checkValidity()).toBe(true)
  expect(testApp.getByLabelText('Date of Birth:').checkValidity()).toBe(true)
  expect(testApp.getByLabelText('SSN:').checkValidity()).toBe(true)
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})
