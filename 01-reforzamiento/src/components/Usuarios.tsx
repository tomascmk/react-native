import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';

export const Usuarios = () => {

    const {users, nextPage, prevPage } = useUsers();

    const renderItem = (user: User) => {
        return (
            <tr key={user.id.toString()}>
                <td>
                    <img 
                        src={user.avatar} 
                        alt={user.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderItem)}
                </tbody>
            </table>
                <br/>
                <button 
                    className="btn btn-danger"
                    onClick={prevPage}
                >
                    Previous
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={nextPage}
                >
                    Next
                </button>
        </>
    )
}
