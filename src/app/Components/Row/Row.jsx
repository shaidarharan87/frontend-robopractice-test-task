import React from 'react';
import module from './Row.module.css'
import {useTime} from "../../hooks/useTime";

const Row = ({ user }) => {

    const userWithTime = useTime(user)

    return (
        <tr className={module.row}>
            <td className={module.first}>
                {user.name}
            </td>
            {userWithTime.days.map((day, index) =>
                <td key={`${user.id}${index}`}>
                    {day}
                </td>
            )}
            <td className={module.last}>
                {userWithTime.total}
            </td>
        </tr>
    );
};

export default Row;