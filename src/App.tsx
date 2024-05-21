import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'
import { getUsers } from './services/users.js'
import { type UserArr } from './types'
import { UserList } from './components/UserList'

function App() {
  const [user, setUser] = useState<UserArr>([])
  const usersCached = useRef<UserArr>([])
  const [filterWord, setFilterWord] = useState('')
  const [isSortedByCountry, setIsSortedByCountry] = useState<boolean>(false)
  const [color, setColor] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const getData = async () => {
    setLoading(true)
    setError(false)
    try {
      const results = await getUsers(currentPage)
      setUser((prevState) => {
        const newUsers = prevState.concat(results)
        usersCached.current = newUsers
        return newUsers
      })
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData().catch((e) => console.log(e))
  }, [currentPage])

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

  const handleUserType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterWord(e.target.value)
  }

  const filteredUsers = useMemo(() => {
    return filterWord.length > 0
      ? [...user].filter((el) => {
          return el.location.country
            .toLowerCase()
            .includes(filterWord.toLowerCase())
        })
      : [...user]
  }, [user, filterWord, isSortedByCountry])

  const sortedUsers = useMemo(() => {
    if (isSortedByCountry) {
      return filteredUsers.sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    } else {
      return filteredUsers
    }
  }, [filteredUsers, isSortedByCountry])
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
      { loading && <p>Cargando</p> }
      { error && <p>Ha habido un error</p> }
      { !loading && !error && sortedUsers.length === 0 && <p>No hay data</p> }
      { sortedUsers.length > 0 && <UserList
        sortedUsers={sortedUsers}
        color={color}
        handleDeleteClick={handleDeleteClick}
      />
      }
      {!loading && !error && <button onClick={() => setCurrentPage(currentPage + 1)}>Cargar mas resultados</button>}
    </>
  )
}

export default App
