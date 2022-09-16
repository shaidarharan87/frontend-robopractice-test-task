import {useEffect, useState} from "react";
import Search from "./Components/Search/Search";
import {useFilter} from "./hooks/useFilter";
import UserService from "./services/UserService";
import {useFetch} from "./hooks/useFetch";
import {usePagination} from "./hooks/usePagination";
import Table from "./Components/Table";
import './index.css'
import Pagination from "./Components/Pagination/Pagination";

export const App = () => {
    const [users, setUsers] = useState([])
    const [rows, setRows] = useState(10)
    const [filter, setFilter] = useState({search: '', sort: '', by: ''})
    const searchedAndSortedUsers = useFilter(users, filter.sort, filter.by, filter.search)
    const [pageUsers, page, maxPages, nextPage, prevPage] = usePagination(searchedAndSortedUsers, rows)
    const [fetchUsers, isUsersLoading, usersError] = useFetch(async () => {
        const res = await UserService.getUsers()
        setUsers(res)
    })
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className={'content'}>
            <Search
                filter={filter}
                setFilter={setFilter}
            />
            {usersError &&
                <h1 className={'message'}>Ошибка на сервере - ${usersError}</h1>
            }

            {isUsersLoading
                ? <h1 className={'message'}>Загрузка</h1>
                : <Table
                    users={pageUsers}
                    filter={filter}
                    setFilter={setFilter}
                >
                </Table>
            }
            <Pagination
                page={page}
                max={maxPages}
                next={nextPage}
                prev={prevPage}
                rows={rows}
                setRows={setRows}
            />
        </div>
    )
}