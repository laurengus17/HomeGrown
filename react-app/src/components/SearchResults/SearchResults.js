import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlantDisplay from "../PlantDisplay/PlantDisplay";
import './SearchResults.css';

const SearchResults = () => {
    const { searchedWord } = useParams();
    const [search, setSearch] = useState([]);


    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/search/${searchedWord}`);

            if (res.ok) {
                const data = await res.json();
                setSearch(data.results);
            }
        })();
    }, [searchedWord]);

    return (
        <div className='plants_search_page_container'>
            <h1 className='search_term_title'> Search Term: {searchedWord} </h1>
                {search.length ?
                <div className='plants_results'>
                        {search.map((plant) => (
                            <PlantDisplay plant={plant} />
                        ))}
                </div>
                :
                <h2>Sorry, no results found.</h2>
                }
        </div>
    )
}

export default SearchResults;
