import { type UserArr } from '../types'
export async function getUsers() {
  try {
    const fetchData = await fetch('https://randomuser.me/api/?results=8')
    const { results }: { results: UserArr } = await fetchData.json()
    return results
  } catch (e) {
    throw new Error('Whoops!')
  }
}
