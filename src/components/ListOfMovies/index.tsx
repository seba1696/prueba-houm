import { Movie } from "types"
import { CardOfMovie } from "../CardOfMovie"
import { Spinner } from "../Spinner"
import "./index.css"

interface Props {
    movies: Array<Movie>
    loading: boolean
}

export const ListOfMovies = ({ movies, loading }: Props) => (
    <div className="list-of-movies">
        {movies.map(({ id, poster_path, title, overview, vote_average, vote_count }) =>
            <CardOfMovie
                id={id}
                poster_path={poster_path}
                title={title}
                overview={overview}
                vote_average={vote_average}
                vote_count={vote_count}
                key={id}
            />
        )}
        {loading && <Spinner />}
    </div>
)