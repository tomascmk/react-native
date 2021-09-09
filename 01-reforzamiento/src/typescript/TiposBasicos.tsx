
export const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Volar', 'Fuerza', 'Velocidad']

    return (
        <>
         <h3>Tipos basicos</h3>   
         {nombre}, {edad}, {estaActivo ? 'activo': 'inactivo'}
         <hr />
         {poderes.join(', ')}
        </>
    )
}
