import React, { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const baseURL = process.env.REACT_APP_BASE_URL
  const apiKey = process.env.REACT_APP_API_KEY
  const [result, setResult] = useState('')

  const handleSubmit = (e, payload) => {
    e.preventDefault()
    const postSubmit = async () => {
      return await fetch(baseURL + 'status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apiKey
        },
        body: JSON.stringify(payload)
      }).then(response => response.json())
    }
    postSubmit().then(response => {
      console.log(response)
      setResult(response.veteran_status)
    })
  }

  return (
    <div>
      <h1>Veteran Status Checker</h1>
      <Form {...{ handleSubmit, result, setResult }} />
    </div>
  )
}

export default App
