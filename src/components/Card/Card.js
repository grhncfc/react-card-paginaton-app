import React from 'react';
import './Card.css';
import uuid from 'react-uuid';


function Card({cards, loading}) {
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className={"allCards"}>
            {cards.map(cards =>(
                <div className={"card-style"} key={uuid()}>
                    <img className={"card-photo"} src={cards.download_url} alt={cards.id}/>
                    <div className={"card-write"}>{cards.author}</div>
                </div>
                )
            )}
        </div>
    );
}

export default Card;