import React from 'react';
import module from './Row.module.css'

const switchSort = sort => {
    if (sort === 'a-z')
        return 'z-a'
    return 'a-z'
}


const Header = ({ user, filter, setFilter }) => {
    const sort = (by) => () => {
        setFilter({
            ...filter,
            by,
            sort: switchSort(filter.sort)
        })
    }
    return (
        <tr className={module.header}>

                <th className={module.first} onClick={sort('name')} >
                    User
                </th>

            {user?.days.map((day, index) =>
                <th
                    onClick={sort(index)}
                    key={`${user.id}${index}`}
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