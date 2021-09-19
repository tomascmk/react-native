import React from 'react'

export const Funciones = () => {

    const sumar = (a:number, b:number): number => {
        return a + b;
    }   

    return (
        <>
         <h3>Funciones</h3> 
         <span>el resultado es {sumar(23, 86)}</span>  
        </>
    )
}
