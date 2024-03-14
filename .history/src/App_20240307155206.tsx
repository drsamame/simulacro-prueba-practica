import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'

const resultData = jsonData

function App() {
  const [user, setUser] = useState(resultData)
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(async (res) => await res.json())
      .then((data) => setUser(data))
  }, [])
  return (
    <>
      <h1>Prueba Técnica</h1>
      {JSON.stringify(user)}
    </>
  )
}

export default App
