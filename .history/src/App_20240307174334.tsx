import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch('https://randomuser.me/api/?results=3')
        const { results } = await fetchData.json()
        console.log(results)
        setUser(results)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])
  return (
    <>
      <h1>Prueba Técnica</h1>
      <table>
        <thead>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </thead>
        <tbody>{us}</tbody>
      </table>
      {JSON.stringify(user)}
    </>
  )
}

export default App
