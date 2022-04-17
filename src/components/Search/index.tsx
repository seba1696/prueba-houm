import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import search from "assets/img/search.svg"
import "./index.css"

export const Search = () => {
    const [query, setQuery] = useState<string>("")
    const [selectedYear, setSelectedYear] = useState<string>("")
    const [yearsOptions, setYearsOptions] = useState<Array<string>>([])
    let navigate = useNavigate();

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        if (query || (selectedYear && query)) navigate(`/query/${query}/${selectedYear}`)
    }

    const handleChangeText = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(evt.target.value)
    }

    const handleChangeYear = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(evt.target.value)
    }

    const currentYear = new Date().getFullYear()

    useEffect(() => {
        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push((currentYear - i).toString())
        }
        setYearsOptions(arr)
    }, [])

    return (

        <form onSubmit={handleSubmit}>
            <div className="searching-options">
                <div className="input-search-container">
                    <input type="text" value={query} onChange={handleChangeText} />
                    <img src={search} alt="search" />
                </div>
                <select onChange={handleChangeYear}>
                    <option value="" className={!selectedYear ? "active" : ""}>Todos</option>
                    {yearsOptions.map(year =>
                        <option value={year} key={year} className={selectedYear === year ? "active" : ""}>{year}</option>
                    )}
                </select>
            </div>
            <button>Buscar</button>
        </form>
    )
}