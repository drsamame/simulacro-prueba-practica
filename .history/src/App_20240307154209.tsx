import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'

const resultData = jsonData

function App() {
  const [user, setUser] = useState(resultData)
  useEffect(() => {})
  return (
    <>
      <h1>Prueba Técnica</h1>
      {JSON.stringify(user)}
    </>
  )
}

export default App
