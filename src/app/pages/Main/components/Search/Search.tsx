import React, {useState} from "react";
import {useDataStore} from "../../../../store/context";
import {IJokes} from "../../../../services/interfaces/jokes";
import './search.scss'

interface SearchProps {
    jokes: IJokes[]
}

export const Search = ({jokes}: SearchProps) => {
    const store = useDataStore()
    const [searchValue, setSearchValue] = useState('')

    const onChangeSearch = async (value: string) => {
        setSearchValue(value)
        await store.jokes.searchJokes(value)
    }
    return (
        <div className="main-page__search">
            <input
                type="text"
                onChange={(e) => onChangeSearch(e.target.value)}
                value={searchValue}
                placeholder='Search jokes...'
                className='search__input'
                autoFocus
            />
            {searchValue.length > 2 && (<div className="search__result"><span>Found jokes: {jokes.length}</span></div>)}
        </div>
    )
}