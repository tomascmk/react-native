import { useState } from 'react'

export const useForms = () => {
    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: '123456'
    })

    const handleInput = (value: string, field: string) => {
        setFormulario({
            ...formulario,
            [field]: value
        })
    }

    return {
        formulario,
        handleInput
    }
}
