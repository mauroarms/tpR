import React from 'react';
import BoxPelicula from './BoxPelicula';

const ContenedorPeliculas = ({arrayPelicula}) => {
    return (
        <div className='contenedorPeliculas row justify-content-center gap-4'>
            
            {arrayPelicula.map((pelicula, index)=> 
            
            <BoxPelicula pelicula={pelicula} key={index} ></BoxPelicula>
            )}

        </div>
    );
};

export default ContenedorPeliculas;