import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user] = useState()
  useEffect(() => {
    const getData = async () => {
      const result = await fetch('https://randomuser.me/api/?results=3')
      const data = await result.json()
    }
    getData()
  }, [])
  return (
    <>
      <h1>Prueba Técnica</h1>
      <table>
        <thead>
          <thead>Foto</thead>
          <thead>Foto</thead>
        </thead>
        <tbody></tbody>
      </table>
      {JSON.stringify(user)}
    </>
  )
}

export default App
