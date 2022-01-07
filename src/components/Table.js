import React from 'react';
import Row from './Row';

let infoTabla = [
    {
        titulo: "Billy Elliot",
        duracion: "123",
        calificacion: "5",
        premios: 2,
        categorias: ["Drama","Comedia"],
    },

    {
        titulo: "Alicia en el país de las maravillas",
        duracion: "142",
        calificacion: "4.8",
        premios: 3,
        categorias: ["Drama","Acción","Comedia"],
    },
    
]

function Table (props){
    return (
        <div className="col-12 mx-auto shadow p-2 mb-4">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Género</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Género</th>
                            <th>Premios</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            infoTabla.map( (info, i) => {
                                return <Row titulo = {info.titulo} duracion = {info.duracion}
                                        calificacion = {info.calificacion} premios = {info.premios}
                                        categorias = {info.categorias} key = {i}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;