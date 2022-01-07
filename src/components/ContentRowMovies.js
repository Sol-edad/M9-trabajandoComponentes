import react from "react";
import propType from "prop-types";

function ContentRowMovies(props) {
	return (
		<div className="col-md-4 mb-4">
            <div className={`elemento ${props.colorBorde} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

ContentRowMovies.defaultProps = {
    titulo: "No hay título",
    colorBorde: "border-left-dark",
    cifra: 0,
    icono: "fas fa-times"
}

ContentRowMovies.propType = {
    titulo: propType.string.isRequired,
    colorBorde: propType.string.isRequired,
    cifra: propType.number.isRequired,
    icono: propType.string.isRequired
}

export default ContentRowMovies;