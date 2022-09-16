import {useMemo} from "react";

const useSort = (users, sort, by) => {
    return useMemo(() => {
        if (by === ''|| null)
            return users
        if (sort !== 'a-z')
            return [...users].sort((a, b) => {
                if(by === 'name')
                    return b.name.localeCompare(a.name)
                if(by === 'total') {
                    return b.total - a.total
                }
                return b.days[by] - a.days[by]

            })
        return [...users].sort((a, b) => {
            if(by === 'name')
                return a.name.localeCompare(b.name)
            if(by === 'total')
                return a.total - b.total
            return a.days[by] - b.days[by]

        })
    }, [sort, users, by])
}

export const useFilter = (users, sort, by, search) => {
    const sortedUsers = useSort(users, sort, by)
    return useMemo(()=>{
        return sortedUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedUsers])
}