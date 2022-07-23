import React from 'react'

function Card(props) {
    return (
        <div>
            <h2>{props.cardTitle}</h2>
            <h5>{props.cardDescription}</h5>
        </div>
    )
}

export default Card
