import {useMemo} from "react";
const timeFormat = (num) => {
    const time = new Date(num)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / (1000 * 60)) % 60)
    if(days > 0)
        return `${days}:${hours}:${minutes}`
    return `${hours}:${minutes}`
}
export const useTime = (user) => {
    const { days, total } = user
    return useMemo(() => {
        const time = days.map(num => timeFormat(num))
        const totalTime = timeFormat(total)
        return {...user, days: time, total: totalTime}
    }, [user])
}