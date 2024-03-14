import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user, setUser] = useState()
  useEffect(async () => {
    try {
      const data = await fetch('https://randomuser.me/api/?datas=3')
      const { result } = await result.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
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
