import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'


function App() {
  const [user, setUser] = useState()
  useEffect(async () => {
    const res = await fetch('https://randomuser.me/api/?results=3').json()
    console.log(res)
    // setUser(res)
  }, [''])
  return (
    <>
      <h1>Prueba Técnica</h1>
      {JSON.stringify(user)}
    </>
  )
}

export default App
