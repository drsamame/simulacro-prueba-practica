export async function users() {
    const fetchData = await fetch('https://randomuser.me/api/?results=3')
    const { results }: { results: UserArr } = await fetchData.json()
    ret
}