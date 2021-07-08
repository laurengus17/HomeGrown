import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlantDisplay from "../PlantDisplay/PlantDisplay";

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
        <>
            <h1> Search Term: {searchedWord} </h1>
                {search.length ?
                <>
                        {search.map((plant) => (
                            <PlantDisplay plant={plant} />
                        ))}
                </>
                :
                <h2>Sorry, no results found.</h2>
                }
        </>
    )
}

export default SearchResults;
