import { API_KEY, API_URL } from "./settings";

interface Props {
    id: string | undefined
}

export const getMovieDetail = async ({ id }: Props) => {
    const apiURL = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            return response
        })
}