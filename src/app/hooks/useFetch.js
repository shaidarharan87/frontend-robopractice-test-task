import {useState} from "react";

export const useFetch = fetchFn => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const loading = async () => {
        try {
            setIsLoading(true)
            await fetchFn()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [loading, isLoading, error]
}