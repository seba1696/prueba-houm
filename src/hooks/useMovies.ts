import { useEffect, useState } from "react"
import { getMovies } from "services/getMovies"
import { useBasicDataFetch } from "./useBasicDataFetch"

const INITIAL_PAGE = 1

export const useMovies = () => {
    const [page, setPage] = useState<number>(1)
    const [loadingNextPage, setLoadingNextPage] = useState<boolean>(false)
    const { loading, setLoading, data, setData, errors, setErrors } = useBasicDataFetch()

    useEffect(() => {
        setLoading(true)
        getMovies({ page })
            .then(data => setData(data))
            .catch(e => setErrors(e))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        else {
            setLoadingNextPage(true)
            getMovies({ page })
                .then(data => setData((prevData: any) => prevData.concat(data)))
                .catch(e => setErrors(e))
                .finally(() => setLoadingNextPage(false))
        }
    }, [page])

    return { loading, data, errors, setPage, loadingNextPage }
}