import React from 'react'
import NumberFormat from 'react-number-format'
import { useInput } from './hooks/input-hook'

export default ({ handleSubmit, result, setResult }) => {
  const { value: first_name, bind: bindFirstName, reset: resetFirstName } = useInput('')
  const { value: last_name, bind: bindLastName, reset: resetLastName } = useInput('')
  const { value: birth_date, bind: bindBirthDate, reset: resetBirthDate } = useInput('')
  const { value: ssn, bind: bindSSN, reset: resetSSN } = useInput('')
  const payload = { first_name, last_name, birth_date, ssn }

  const resetFields = () => {
    resetFirstName()
    resetLastName()
    resetBirthDate()
    resetSSN()
    setResult('')
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e, payload)}>
        <h3>New Patient:</h3>
        <label>
          First Name:
          <input type='text' {...bindFirstName} name='first_name' required disabled={result !== ''} />
        </label>
        <label>
          Last Name:
          <input type='text' {...bindLastName} name='last_name' required disabled={result !== ''} />
        </label>
        <label>
          Date of Birth:
          <input type='date' {...bindBirthDate} name='birth_date' required disabled={result !== ''} />
        </label>
        <label>
          SSN:
          <NumberFormat
            format='###-##-####'
            mask='_'
            type='text'
            {...bindSSN}
            name='ssn'
            required
            disabled={result !== ''}
          />
        </label>
        <input type='submit' value='Submit' disabled={result !== ''} />
      </form>
      <div className={'result ' + (result === 'confirmed' && 'green') + ' ' + (result === '' && 'hidden')}>
        <p>This patient's Veteran status is: {result}</p>
        <button onClick={() => resetFields()}>Reset Form</button>
      </div>
    </>
  )
}
