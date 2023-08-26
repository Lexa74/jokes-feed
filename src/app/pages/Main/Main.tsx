import React, {useState} from "react";
import {IJokes} from "../../services/interfaces/jokes";
import {useObserver} from "mobx-react";
import {useDataStore} from "../../store/context";

export const Main = () => {
    const store = useDataStore()
    const [searchValue, setSearchValue] = useState('')

    const onChangeSearch = async (value: string) => {
        setSearchValue(value)
        await store.jokes.searchJokes(value)
    }

    return useObserver(() => {
        const jokes: IJokes[] = store.jokes.jokesBySearch
        return (
            <div className='wrapper'>
                <input
                    type="text"
                    onChange={(e) => onChangeSearch(e.target.value)}
                    value={searchValue}
                />
                {!jokes.length ? '' : (
                    <>
                        {jokes.map((joke) => (
                            <div key={joke.id}>
                                <p>{joke.id}</p>
                                <p>{joke.value}</p>
                                <p>{joke.created_at}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        )
    })
}