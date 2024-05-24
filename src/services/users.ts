export async function getUsers({ pageParam = 1 }: { pageParam?: number }) {
  try {
    const fetchData = await fetch(`https://randomuser.me/api/?results=10&seed=midudev&page=${pageParam}`)
    const { results, info } = await fetchData.json()
    return {
      users: results,
      nextCursor: info.page + 1
    }
  } catch (e) {
    throw new Error('Whoops!')
  }
}
