import React from 'react';
import styles from "./SearchBar.module.css";

const sortBy = {
    "Best Match": "sort_by=best_match&limit=20",
    "Highest Rated": "sort_by=rating&limit=20",
    "Most Reviewed": "sort_by=review_count&limit=20"
};

function SearchBar () {
    return (
        <div>
            <div>
                {Object.keys(sortBy).map((sortOptionName) => ( // First creating an array of the keys/sort options, then mapping through that array to create buttons with each key/sort option. If I then want to access the values, I can still use "sortBy.sortOptionName" or "sortBy[sortOptionName]"
                    <button>{sortOptionName}</button>
                ))}
            </div>
            <div>
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
                <button>Let's Go</button>
            </div>
        </div>
    )
};

export default SearchBar;