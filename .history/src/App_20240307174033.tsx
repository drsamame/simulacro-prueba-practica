import { useState, useEffect } from 'react'
import './App.css'
import jsonData from './mocks/user.json'
import { type Root } from './types'

function App() {
  const [user] = useState()
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch('https://randomuser.me/api/?results=3')
      const { results } = await fetchData.json()
      console.log(results)
    }
    getData()
  }, [])
  return (
    <>
      <h1>Prueba Técnica</h1>
      <table>
        <thead>
          <thead>Foto</thead>
          <thead>Nombre</thead>
          <thead>Apellido</thead>
          <thead>País</thead>
          <thead>Acciones</thead>
        </thead>
        <tbody></tbody>
      </table>
      {JSON.stringify(user)}
    </>
  )
}

export default App
