import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user, setUser] = useState()
  useEffect(async () => {
    fetch(`https://jsonplaceholder.typicode.dsad/users/${payload}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`Usuario ${payload} eliminado correctamente`)
        }
      })
      .catch((err) => {
        toast.error(`Error eliminando el usuario ${userIdToRemove}`)
        if (userToRemove) store.dispatch(rollbackUser(userToRemove))
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
