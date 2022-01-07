import React from 'react';
import propType from "prop-types";

function Row(props){
    return (
        <tr>
            <td>{props.titulo}</td>
                <td>{props.duracion}</td>
                <td>{props.calificacion}</td>
                <td>
                    <ul>
                        {
                            props.categorias.map( (categoria, i) => 
                                <li key = {`categoria ${i}`}>{categoria}</li>
                            )
                        }
                    </ul>
                </td>
            <td>{props.premios}</td>
        </tr>
    );
}

Row.defaultProps = {
    titulo: "No hay título",
    duracion: 0,
    calificacion: 0,
    premios: 0,
    categorias: ["No hay categoria"],
}

Row.propType = {
    titulo: propType.string.isRequired,
    duracion: propType.number.isRequired,
    calificacion: propType.number.isRequired,
    premios: propType.number.isRequired,
    categorias: propType.array.isRequired
}

export default Row;