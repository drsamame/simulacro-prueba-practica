import { useState, useEffect } from 'react'
import './App.css'
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
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {user.map(({email, name}) => {
            return (
              <tr>
                <td>{email}</td>
                <td>{name.first}</td>
                <td>xasda</td>
                <td>xasda</td>
                <td>xasda</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
