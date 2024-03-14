import { useState, useEffect, useRef } from 'react'
import './App.css'
import { getUsers } from './services/users.js'
import { type UserArr } from './types'

function App() {
  const [user, setUser] = useState<UserArr>([])
  const usersCached = useRef<UserArr>([])
  const [filterWord, setFilterWord] = useState('')
  const [isSortedByCountry, setIsSortedByCountry] = useState<boolean>(false)
  const [color, setColor] = useState(false)

  const getData = async () => {
    const results = await getUsers()
    usersCached.current = results
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

  const handleDeleteClick = (email: string) => {
    setUser(
      user?.filter((el) => {
        return el.email !== email
      })
    )
  }

  const handleClickReset = () => {
    setUser(usersCached.current)
  }

  const filteredUsers =
    filterWord.length > 0
      ? [...user].filter((el) => {
          return el.location.country
            .toLowerCase()
            .includes(filterWord.toLowerCase())
        })
      : [...user]

  const sortUsers = (usersFiltered: UserArr) => {
    console.log('sortUsers')
    if (isSortedByCountry) {
      return usersFiltered.sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    } else {
      return usersFiltered
    }
  }

  const sortedUsers = sortUsers(filteredUsers)
  const handleUserType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterWord(e.target.value)
  }

  return (
    <>
      <h1>Prueba Técnica</h1>
      <header>
        <button onClick={handleClickColor}>Colorear files</button>
        <button onClick={handleClickSort}>
          {!isSortedByCountry ? 'Ordenar por país' : 'No ordenar por país'}
        </button>
        <button onClick={handleClickReset}>Resetear Estado</button>
        <input
          type='text'
          onChange={handleUserType}
          placeholder='filtra por país'
        />
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
          {sortedUsers.map(({ email, name, location, picture }) => {
            return (
              <tr key={email}>
                <td>
                  <img src={picture.thumbnail} alt='image thumbnail' />
                </td>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{location.country}</td>
                <td>
                  <button onClick={() => handleDeleteClick(email)}>
                    Borrar
                  </button>
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
