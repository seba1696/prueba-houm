import { useParams } from "react-router-dom"
import { useDetailMovie } from "hooks/useDetailMovie"
import { Header, Spinner } from "components"
import { Movie } from "types"
import { Detail } from "components/Details"

export const DetailMovie = () => {
    const { id } = useParams<string>()
    const { loading, data: movie } = useDetailMovie({ id })

    const {
        budget,
        genres,
        imdb_id,
        overview,
        poster_path,
        production_countries,
        release_date,
        revenue,
        runtime,
        title,
        vote_average,
        vote_count
    }: Movie = movie

    return (
        <div className="page-container">
            <Header />
            {loading ? <Spinner />
                : <Detail
                    budget={budget}
                    genres={genres}
                    imdb_id={imdb_id}
                    overview={overview}
                    poster_path={poster_path}
                    production_countries={production_countries}
                    release_date={release_date}
                    revenue={revenue}
                    runtime={runtime}
                    title={title}
                    vote_average={vote_average}
                    vote_count={vote_count}
                />
            }
        </div>
    )

}