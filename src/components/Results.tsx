import { useUsers } from '../hooks/useUsers'
export const Results = () => {
  const { users } = useUsers()
  return <h3 id='results'>{users.length}</h3>
}
