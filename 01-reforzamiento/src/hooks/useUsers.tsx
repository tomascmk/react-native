import { useEffect, useRef, useState } from 'react';
import { reqRestApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([])
    const pagRef = useRef(1)

    useEffect(() => {
        renderUsers()
    }, [])

    const renderUsers = async() => {
        const resp = await reqRestApi.get<ReqResList>('/users', {
            params: {
                page: pagRef.current
            }
        })
        if(resp.data.data.length > 0){
            setUsers(resp.data.data)
        } else {
            pagRef.current --;
            alert('No hay mas registros')
        }
    }
    
    const nextPage = () => {
        pagRef.current ++;
        renderUsers();
    }
    const prevPage = () => {
        if (pagRef.current > 1) {
            pagRef.current --;
            renderUsers();
        }
    }
    return {
        users,
        nextPage,
        prevPage
    }
}
