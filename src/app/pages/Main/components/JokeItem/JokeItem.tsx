import React from "react";
import './joke-item.scss'

interface JokeItemProps {
    id: string,
    value: string,
    created_at: string
    variant: string,
    url: string
}

export const JokeItem = ({id, value, created_at, url, variant}: JokeItemProps) => {
    return (
        <a href={url} target='_blank' className={`joke-container ${variant}`}>
            <span className='name'>{value}</span>
            <div className="footer">
                <span>{id}</span>
                <span>{new Date(created_at).toLocaleDateString()}</span>
            </div>
        </a>
    )
}