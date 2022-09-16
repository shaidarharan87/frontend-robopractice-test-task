import axios from "axios";

class UserService {
    async getUsers() {
        const response = await axios.get('http://localhost:8080/api/users')
        const users = response.data
        const dates = [...new Set(users.map(user => user.Days.map(day => day.Date)).flat())]
        dates.sort((a, b) => a.localeCompare(b))
        const result = users.map(user => {
            const { id, Fullname, Days } = user
            const diffNum = dates.map(date => {
                const match = Days.find(day => day.Date === date)
                if(match !== undefined) {
                    const end = Date.parse(`${match.Date}T${match.End.split('-').join(':')}`)
                    const start = Date.parse(`${match.Date}T${match.Start.split('-').join(':')}`)
                    const diff = end - start
                    return diff
                }
                return 0
            })
            const total = diffNum.reduce((pre, cur) => pre + cur, 0)

            return { id, name: Fullname, days: diffNum, total }
        })
        return result
    }
}
export default new UserService