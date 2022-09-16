import React from 'react';
import module from './Pagination.module.css'
const Pagination = ({ page, max, prev, next, rows, setRows }) => {
    return (
        <div className={module.pagination}>
            <span>Rows per page:</span>
            <select
                className={module.select}
                onChange={(e)=>setRows(e.target.value)}
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">30</option>
            </select>
            <div className={module.info}>{page} of {max}</div>
            <button disabled={page === 1} className={module.button} onClick={prev}>{'<'}</button>
            <button disabled={page === max} className={module.button} onClick={next}>{'>'}</button>
        </div>
    );
};

export default Pagination;