import { Movie } from "types"
import notFoundIMG from "assets/img/not-found-image.svg"
import "./index.css"

export const Detail = ({ budget, genres, imdb_id, overview, poster_path, production_countries, release_date, revenue, runtime, title, vote_average, vote_count }: Movie) => {
    return (
        <div className="movie-detail">
            <img alt={title} src={poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}` : notFoundIMG} />
            <table>
                <thead>
                    <tr>
                        <td colSpan={2}>Detalle pelicula</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Titulo</th>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <th>Presupuesto</th>
                        <td>{budget}</td>
                    </tr>
                    <tr>
                        <th>Géneros</th>
                        <td>{genres?.map(genre =>
                            <p key={genre.id}>{genre.name}</p>
                        )}</td>
                    </tr>
                    <tr>
                        <th>IMDb id</th>
                        <td>{imdb_id}</td>
                    </tr>
                    <tr>
                        <th>Descripción</th>
                        <td>{overview}</td>
                    </tr>
                    <tr>
                        <th>Países de producción</th>
                        <td>{production_countries?.map(country =>
                            <p key={country.iso_3166_1}>{country.name}</p>
                        )}</td>
                    </tr>
                    <tr>
                        <th>Fecha de lanzamiento</th>
                        <td>{release_date}</td>
                    </tr>
                    <tr>
                        <th>Ingresos</th>
                        <td>{revenue}</td>
                    </tr>
                    <tr>
                        <th>Duración</th>
                        <td>{runtime}</td>
                    </tr>
                    <tr>
                        <th>Clasificación</th>
                        <td>{vote_average}</td>
                    </tr>
                    <tr>
                        <th>Votos</th>
                        <td>{vote_count}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}