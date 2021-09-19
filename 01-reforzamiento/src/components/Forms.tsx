import { useState } from 'react';
import { useForms } from '../hooks/useForms';

export const Forms = () => {
    const {formulario, handleInput} = useForms();

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={ ({target}) => handleInput(target.value, 'email') }
                />
            <input
                type="text"
                className="form-control mb-2 mt-2"
                placeholder="Password"
                value={formulario.password}
                onChange={ ({target}) => handleInput(target.value, 'password') }
            />
            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    )
}
