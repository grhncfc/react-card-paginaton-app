import React from 'react';
import styles from './Pagination.module.css'
import uuid from 'react-uuid';

function Pagination({cardsPerPage, totalCards, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i<= Math.ceil(totalCards/cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    const onClick = (e,number) => {
        e.preventDefault();
        paginate(number);
    }
    return (
            <ul className={styles.pagination}    >
                {pageNumbers.map(number => (
                    <li key={uuid()} className={styles.buttonDesign} >
                        <a onClick={e => onClick(e,number)} href="#" className={styles.cardsLink}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
    );
}

export default Pagination;