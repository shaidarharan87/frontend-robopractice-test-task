import {useMemo} from "react";

const useSort = (users, sort, by) => {
    return useMemo(() => {
        if (by === ''|| null)
            return users
        if (sort !== 'a-z')
            return [...users].sort((a, b) => {
                if(by !== 'name')
                    return b.days[by] - a.days[by]
                return b.name.localeCompare(a.name)
            })
        return [...users].sort((a, b) => {
            if(by !== 'name')
                return a.days[by] - b.days[by]
            a.name.localeCompare(b.name)
        })
    }, [sort, users])
}

export const useFilter = (users, sort, by, search) => {
    const sortedUsers = useSort(users, sort, by)
    return useMemo(()=>{
        return sortedUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedUsers])
}