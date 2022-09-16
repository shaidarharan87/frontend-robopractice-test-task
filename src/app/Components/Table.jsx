import React from 'react';
import Header from "./Row/Header";
import Row from "./Row/Row";
import module from './Table.module.css'

const Table = ({users, filter, setFilter }) => {
    return (
        <div className={module.container}>
            <table className={module.table}>
                <thead className={module.head}>
                    <Header
                        user={users[0]}
                        filter={filter}
                        setFilter={setFilter}
                    />
                </thead>
                <tbody>
                    {users.map(user =>
                        <Row user={user} key={user.id}/>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;