import { useCallback, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Header, ListOfMovies } from "components"
import { useSearch } from "hooks/useSearch"
import { useObserver } from "hooks/useObserver"
import debounce from "just-debounce-it"

export const SearchResults = () => {
    const { query, year } = useParams()
    const { loading, data: movies, setPage, loadingNextPage } = useSearch({ query, year })
    const ref = useRef<HTMLDivElement>(null)
    const { isClose } = useObserver({ distance: "550px", ref: loading || loadingNextPage ? null : ref, once: false })

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 300
    ), [setPage])

    useEffect(() => {
        if (isClose) debounceHandleNextPage()
    }, [isClose, debounceHandleNextPage])

    return (
        <div className="page-container">
            <Header />
            <h3>{query}</h3>
            <ListOfMovies movies={movies} loading={loading || loadingNextPage} />
            <div ref={ref} />
        </div>
    )
}