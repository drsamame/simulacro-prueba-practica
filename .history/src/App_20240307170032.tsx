import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res) => {
        if (res.ok) {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [''])
  return (
    <>
      <h1>Prueba Técnica</h1>
      {JSON.stringify(user)}
    </>
  )
}

export default App
