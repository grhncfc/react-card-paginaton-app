import React from 'react';
import './Pagination.css';
import uuid from 'react-uuid';

function Pagination({cardsPerPage, totalCards, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i<= Math.ceil(totalCards/cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className={"pagination"}>
                {pageNumbers.map(number => (
                    <li key={uuid()} className={"button-design"} >
                        <a onClick={() => paginate(number)} href="!#" className={"cards-link"}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;