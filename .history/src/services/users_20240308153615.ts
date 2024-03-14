import { type UserArr } from '../types'
export async function getUsers() {
  const fetchData = await fetch('https://randomuser.me/api/?results=3')
  const { results }: { results: UserArr } = await fetchData.json()
  return results
}
