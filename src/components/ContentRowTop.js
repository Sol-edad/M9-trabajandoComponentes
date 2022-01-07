import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Table from './Table';

let elementosMovies = [
    {
        titulo: "Movies in Data Base",
        colorBorde: "border-left-primary",
        cifra: 21,
        icono: "fa-film"
    },

    {
        titulo: "Total awards",
        colorBorde: "border-left-danger",
        cifra: 79,
        icono: "fa-award"
    },
    
    {
        titulo: "Actors quantity",
        colorBorde: "border-left-warning",
        cifra: 40,
        icono: "fa-user"
    },
]

function ContentRowTop() {
    return (
        <div class="container-fluid">
    		<div class="d-sm-flex align-items-center justify-content-between mb-4">
    			<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
    		</div>

    		<div class="row">
    			{
    				elementosMovies.map((elemento) => {
    	                return <ContentRowMovies
    	                		titulo = {elemento.titulo} colorBorde = {elemento.colorBorde}
    	                		cifra = {elemento.cifra} icono = {elemento.icono} />
    	            })
    			}
    		</div>

    		<div class="row">
    			<LastMovieInDb />
    			<GenresInDb />
                <Table />
    		</div>
    	</div>
    );
}

export default ContentRowTop;