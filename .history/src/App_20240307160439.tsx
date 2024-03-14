import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { User } from './types'

const resultData = jsonData


function App() {
  const [user, setUser] = useState(resultData)
  useEffect(async () => {

    const res = await fetch('https://randomuser.me/api/?results=3')
    await res.json()
    setUser(data)
  }, [])
  return (
    <>
      <h1>Prueba Técnica</h1>
      {JSON.stringify(user)}
    </>
  )
}

export default App
