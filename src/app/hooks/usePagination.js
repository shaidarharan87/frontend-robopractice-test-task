import {useMemo, useState} from "react";

export const usePagination = (items, max) => {
    const [page, setPage] = useState(1);
    const pages = useMemo(() => {
        setPage(1)
        return Math.ceil(items.length / max)
    }, [items.length, max])

    const view = useMemo(() => {
        return [...items].slice(max * (page - 1), max * page)
    },[items, page, max])

    const increment = () => {
        if(pages > page)
            setPage(page + 1)
    }
    const decrement = () => {
        if(1 < page)
            setPage(page - 1)
    }
    return [view, page, pages, increment, decrement]
}