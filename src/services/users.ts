import { type UserArr } from '../types'

export async function getUsers(currentPage: number) {
  try {
    const fetchData = await fetch(`https://randomuser.me/api/?results=10&seed=midudev&page=${currentPage}`)
    console.log(fetchData)
    const { results }: { results: UserArr } = await fetchData.json()
    return results
  } catch (e) {
    throw new Error('Whoops!')
  }
}
