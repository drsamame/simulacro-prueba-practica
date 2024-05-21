import { type UserArr } from '../types'
interface Props {
  sortedUsers: UserArr
  color: boolean
  handleDeleteClick: (email: string) => void
}
export function UserList({ sortedUsers, color, handleDeleteClick }: Props) {
  return (
    <>

      <table width='100%'>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className={color ? 'table--showColors' : ''}>
          {sortedUsers.map(({ email, name, location, picture }) => {
            return (
              <tr key={email}>
                <td>
                  <img src={picture.thumbnail} alt='image thumbnail' />
                </td>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{location.country}</td>
                <td>
                  <button onClick={() => handleDeleteClick(email)}>
                    Borrar
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
