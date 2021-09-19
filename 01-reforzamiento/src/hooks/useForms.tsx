import { useState } from 'react'

export const useForms = <T extends Object>(form: T) => {
    const [state, setState] = useState(form)

    const handleInput = (value: string, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return {
        form: state,
        handleInput
    }
}
