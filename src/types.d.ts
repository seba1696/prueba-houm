interface Genre {
    id: number,
    name: string
}

interface Country {
    iso_3166_1: string,
    name: string
}

export interface Movie {
    id?: number,
    budget?: number,
    genres?: Array<Genre>,
    imdb_id?: string,
    overview: string,
    poster_path?: string,
    production_countries?: Array<Country>,
    release_date?: string,
    revenue?: number,
    runtime?: number,
    title: string,
    vote_average: number,
    vote_count: number
}