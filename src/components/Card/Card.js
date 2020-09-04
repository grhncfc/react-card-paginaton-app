import React from 'react';
import styles from './Card.module.css'
import uuid from 'react-uuid';


function Card({cards, loading,style}) {
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.allCards}>
            {cards.map(cards =>(
                <div style={style} className={styles.cardStyle} key={uuid()}>
                    <img src={cards.download_url} alt={cards.id}/>
                    <div className={styles.cardWrite}>{cards.author}</div>
                </div>
                )
            )}
        </div>
    );
}

export default Card;