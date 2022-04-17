import { useCallback, useRef } from "react"
import { Header, ListOfMovies } from "components"
import { useMovies } from "hooks/useMovies"
import { useObserver } from "hooks/useObserver"
import { useEffect } from "react"
import debounce from "just-debounce-it"

export const Home = () => {
    const { loading, data: movies, setPage, loadingNextPage } = useMovies()
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
            <h3>Peliculas populares</h3>
            <ListOfMovies movies={movies} loading={loading || loadingNextPage} />
            <div ref={ref} />
        </div>
    )
}