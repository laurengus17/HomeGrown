import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './NavBar.css'


const SearchBar = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');

    const searchPlant = async () => {
        history.push(`/search/${search}`)
    }

    const searchInput = (e) => {
        setSearch(e.target.value);
    }

    const enterSubmit = (e) => {
        if(e.key === 'Enter') {
            searchPlant();
        }
    }

    return (
        <li className='searchbar_div'>
            <div className='searchbar'>
                <input 
                type="text"
                name="question"
                placeholder="Find a plant..."
                value={search}
                onChange={searchInput}
                onKeyPress={enterSubmit} />
                <button onClick={searchPlant}>
                    <i class="fas fa-search" />
                </button>
            </div>
        </li>
    )
}

export default SearchBar;