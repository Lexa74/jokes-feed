import React from "react";
import {IJokes} from "../../services/interfaces/jokes";
import {useObserver} from "mobx-react";
import {useDataStore} from "../../store/context";
import './main.scss'
import {JokeItem} from "./components/JokeItem/JokeItem";
import {Search} from "./components/Search/Search";

export const Main = () => {
    const store = useDataStore()

    return useObserver(() => {
        const jokes: IJokes[] = store.jokes.jokesBySearch
        const error = store.jokes.error

        if(error) {
            return <p>Произошла ошибка. Попробуйте обновить страницу.</p>
        }
        return (
            <div className='wrapper main-page'>
                <Search jokes={jokes}/>
                {!jokes.length ? '' : (
                    <div className='jokes-content'>
                        <div className='joke-wrapper large'>
                            {jokes.slice(0, 2).map(joke => <JokeItem key={joke.id} {...joke} variant='large' />)}
                        </div>
                        <div className='joke-wrapper small'>
                            {jokes.slice(2).map(joke => <JokeItem key={joke.id} {...joke} variant='small' />)}
                        </div>
                    </div>
                )}
            </div>
        )
    })
}