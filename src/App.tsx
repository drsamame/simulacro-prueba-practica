import { useState, useMemo } from 'react'
import './App.css'
import { UserList } from './components/UserList'
import { Results } from './components/Results'
import { useUsers } from './hooks/useUsers'

function App() {
  const [filterWord, setFilterWord] = useState('')
  const [isSortedByCountry, setIsSortedByCountry] = useState<boolean>(false)
  const [color, setColor] = useState(false)
  const { isLoading, isError, users, fetchNextPage, refetch } = useUsers()

  const handleClickColor = () => {
    setColor(!color)
  }

  const handleClickSort = () => {
    setIsSortedByCountry(!isSortedByCountry)
  }

  const handleDeleteClick = (email: string) => {
    //
  }

  const handleClickReset = async () => {
    await refetch()
  }

  const handleUserType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterWord(e.target.value)
  }

  const filteredUsers = useMemo(() => {
    return filterWord.length > 0
      ? [...users].filter((el) => {
          return el.location.country
            .toLowerCase()
            .includes(filterWord.toLowerCase())
        })
      : [...users]
  }, [users, filterWord, isSortedByCountry])

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
      <Results />
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
      {isLoading && <p>Cargando</p>}
      {!isLoading && isError && <p>Ha habido un error</p>}
      {!isLoading && !isError && sortedUsers.length === 0 && <p>No hay data</p>}
      {sortedUsers.length > 0 && (
        <UserList
          sortedUsers={sortedUsers}
          color={color}
          handleDeleteClick={handleDeleteClick}
        />
      )}
      {!isLoading && !isError && (
        <button onClick={async () => await fetchNextPage()}>
          Cargar mas resultados
        </button>
      )}
    </>
  )
}

export default App
