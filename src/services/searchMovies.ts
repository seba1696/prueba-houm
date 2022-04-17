import { API_KEY, API_URL } from "./settings";

interface Props {
    page: number,
    query?: string,
    year?: string
}

export const searchMovies = async ({ page = 1, query = "", year = "" }: Props) => {
    const apiURL = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}&year=${year}`
    
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