const BoxPelicula = ({pelicula}) => {
    return (
        <div className="boxPelicula g-col-lg-6 g-col-sm-12 g-col-xl-6">
            <h3 className="text-center">{pelicula.getTitulo()}</h3>
            <p>{pelicula.getDescripcion()}</p>
            <div className="text-center">
                <span className="badge rounded-pill text-bg-warning p-2 ">{pelicula.getGenero()}</span>
            </div>
            
            

        </div>
    );
};

export default BoxPelicula;