import { useForms } from '../hooks/useForms';

export const Forms = () => {
    const {form, handleInput} = useForms({
        email: '',
        password: ''
    });

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={ ({target}) => handleInput(target.value, 'email') }
                />
            <input
                type="text"
                className="form-control mb-2 mt-2"
                placeholder="Password"
                value={form.password}
                onChange={ ({target}) => handleInput(target.value, 'password') }
            />
            <code>
                <pre>{JSON.stringify(form, null, 2)}</pre>
            </code>
        </>
    )
}
