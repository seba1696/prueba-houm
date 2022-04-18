import { useEffect, useState } from "react"
import { searchMovies } from "services/searchMovies"
import { useBasicDataFetch } from "./useBasicDataFetch"

interface Props {
    query: string | undefined
    year?: string
}

const INITIAL_PAGE = 1

export const useSearch = ({ query = "", year }: Props) => {
    const [page, setPage] = useState<number>(1)
    const [loadingNextPage, setLoadingNextPage] = useState<boolean>(false)
    const { loading, setLoading, data, setData, errors, setErrors } = useBasicDataFetch()

    useEffect(() => {
        setLoading(true)
        searchMovies({ page, query, year })
            .then(data => setData(data))
            .catch(e => setErrors(e))
            .finally(() => setLoading(false))
    }, [query, year])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        else {
            setLoadingNextPage(true)
            searchMovies({ page, query, year })
                .then(data => setData((prevData: any) => prevData.concat(data)))
                .catch(e => setErrors(e))
                .finally(() => setLoadingNextPage(false))
        }
    }, [page])

    return { loading, data, errors, setPage, loadingNextPage }
}