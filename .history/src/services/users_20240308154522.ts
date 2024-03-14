import { type UserArr } from '../types'
export async function getUsers() {
  try {
    const fetchData = await fetch('https://randomusers.me/api/?results=3')
    const { results }: { results: UserArr } = await fetchData.json()
    return results
  } catch {
    return []
  }
}
