import { API_KEY, API_URL } from "./settings"

interface Props {
    page: number
}

export const getMovies = async ({ page = 1 }: Props) => {
    const apiURL = `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}&limit=10&include_adult=false`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { results = [] } = response
            return results.map((movie: any) => {
                const { id, overview, poster_path, title, vote_average, vote_count } = movie
                return { id, overview, poster_path, title, vote_average, vote_count }
            })
        })
}

