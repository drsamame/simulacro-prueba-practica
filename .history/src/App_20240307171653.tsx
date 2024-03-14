import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json()
          console.log(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <h1>Prueba Técnica</h1>
      <table>
        <thead>
          <thead>
            Foto
          </thead>
        </thead>
        <tbody></tbody>
      </table>
      {JSON.stringify(user)}
    </>
  )
}

export default App
