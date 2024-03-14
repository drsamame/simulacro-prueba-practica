import { useState, useEffect } from 'react'
import './App.css'
import { getUsers } from './services/users.js'
import { type UserArr } from './types'

function App() {
  const [user, setUser] = useState<UserArr>([])
  const [isSortedByCountry, setIsSortedByCountry] = useState<boolean>(false)
  const [color, setColor] = useState(false)
  const getData = async () => {
    const results = await getUsers()
    setUser(results)
  }
  useEffect(() => {
    getData().catch((e) => console.log(e))
  }, [])

  const handleClickColor = () => {
    setColor(!color)
  }

  const handleClickSort = () => {
    setIsSortedByCountry(!isSortedByCountry)
  }

  /*
  const filteredUsers = () => {
      if (isSortedByCountry) {
      const sortedUsers = [...user].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
      return sortedUsers
    } else {
      return user
    }
  }
  */

  return (
    <>
      <h1>Prueba Técnica</h1>
      <header>
        <button onClick={handleClickColor}>Colorear files</button>
        <button onClick={handleClickSort}>
          {!isSortedByCountry ? 'Ordenar por país' : 'No ordenar por país'}
        </button>
      </header>
      <table width='100%'>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className={color ? 'table--showColors' : ''}>
          {filteredUsers().map(({ email, name, location, picture }) => {
            return (
              <tr key={email}>
                <td>
                  <img src={picture.thumbnail} alt='image thumbnail' />
                </td>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{location.country}</td>
                <td>
                  <span>Borrar</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
