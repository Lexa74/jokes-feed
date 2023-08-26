import React from "react";

interface JokeItemProps {
    id: string,
    value: string,
    created_at: string
}

export const JokeItem = ({id, value, created_at}: JokeItemProps) => {
    return (
        <div className='joke-container'>
            <p>{id}</p>
            <p>{value}</p>
            <p>{created_at}</p>
        </div>
    )
}