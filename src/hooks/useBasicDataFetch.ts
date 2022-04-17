import {  useState } from "react"

export const useBasicDataFetch = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>([]);
    const [errors, setErrors] = useState(null)

    return { loading, setLoading, data, setData, errors, setErrors }
}