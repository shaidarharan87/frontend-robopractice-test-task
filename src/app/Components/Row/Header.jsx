import React, {useEffect, useState} from 'react';
import module from './Row.module.css'

const switchSort = sort => {
    if (sort === 'a-z')
        return 'z-a'
    return 'a-z'
}

const Header = ({ user, filter, setFilter }) => {
    const [arrow, setArrow] = useState('')

    const sort = (by) => (e) => {
        setFilter({
            ...filter,
            by,
            sort: switchSort(filter.sort)
        })
        arrow.classList?.remove(module.az)
        arrow.classList?.remove(module.za)
        setArrow(e.target)
    }
    useEffect(() => {
        if (filter.sort === 'a-z')
            return arrow.classList.add(module.az)
        if (filter.sort === 'z-a')
            return arrow.classList.add(module.za)
    }, [arrow, user])


    return (
        <tr className={module.header}>

                <th className={module.first} onClick={sort('name')} >
                    User
                </th>

            {user?.days.map((day, index) =>
                <th
                    onClick={sort(index)}
                    key={index}
                >
                    {index+1}
                </th>)}
                <th className={module.last} onClick={sort('total')}>
                    Monthly total
                </th>
        </tr>
    );
};

export default Header;