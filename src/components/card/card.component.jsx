import React from 'react';
import './card.styles.css'

export const Card = (props) => (

    <div className='card-container'>
        <img 
            alt = 'character'
            src = {`https://robohash.org/${props.character.id}?set=set2&size=180x180`}
        />
        <h1>{props.character.name}</h1>
        <h3>{props.character.email}</h3>
    </div>

)