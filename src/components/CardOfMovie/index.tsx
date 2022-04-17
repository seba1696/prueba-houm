import { useNavigate } from "react-router-dom";
import { Movie } from "types";
import "./index.css"

export const CardOfMovie = ({ id, poster_path, title, overview, vote_average }: Movie) => {
    let navigate = useNavigate()

    const goDetail = () => navigate(`/movie/${id}`)

    return (
        <div onClick={goDetail} className="movie-card">
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`} alt={title} />
            <section>
                <h4>{title}</h4>
                <p>{overview}</p>
                <span>Clasificación: {vote_average}</span>
            </section>
        </div>
    )
}