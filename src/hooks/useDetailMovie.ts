import { useEffect } from "react"
import { getMovieDetail } from "services/getMovieDetail"
import { useBasicDataFetch } from "./useBasicDataFetch"

interface Props {
    id: string | undefined
}

export const useDetailMovie = ({ id = "" }: Props) => {
    const { loading, setLoading, data, setData, errors, setErrors } = useBasicDataFetch()

    useEffect(() => {
        getMovieDetail({ id })
            .then(data => setData(data))
            .catch(e => setErrors(e))
            .finally(() => setLoading(false))
    }, [id])

    return { loading, data, errors }
}