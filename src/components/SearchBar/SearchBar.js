import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import styles from './SearchBar.module.css';

const sortBy = {
    "Best Match": "sort_by=best_match&limit=20",
    "Highest Rated": "sort_by=rating&limit=20",
    "Most Reviewed": "sort_by=review_count&limit=20"
};

function SearchBar () {
    const [sortingOption, setSortingOption] = useState("sort_by=best_match&limit=20");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchLocation, setSearchLocation] = useState("");

    function sortOptionStyle (sortOptionValue) {
        if (sortingOption === sortOptionValue) { // Checking if the current state (sortingOption) is equal to the specific button value (sortOptionValue), which is being passed in the className
            return styles.active;
        } else {
            return styles.sortButton;
        };
    };

    function handleSortingOption (sortOptionValue) {
        setSortingOption(sortOptionValue);
    }

    function handleSearchTerm ({target}) {
        setSearchTerm(target.value);
    }

    function handleSearchLocation ({target}) {
        setSearchLocation(target.value);
    }

    function handleSubmit (event) {
        event.preventDefault(); // Prevents the form from performing the default action
        console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${sortingOption}`)
    }

    return (
        <div className={styles.banner}>
            <div>
                <ButtonGroup className={styles.sortGroup}>
                    {Object.keys(sortBy).map((sortByOption) => (
                        <Button
                            key={sortBy[sortByOption]} // The key is the value corresponding to the specific sortOption key (using bracket notation) - Ex. "sort_by=best_match&limit=20"
                            variant="outline-light"
                            className={sortOptionStyle(sortBy[sortByOption])} // Passing the value corresponding to the specific key, to the sortOptionStyle function which changes the class of the button
                            onClick={() => {
                                handleSortingOption(sortBy[sortByOption])
                            }}
                        >
                            {sortByOption}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.searchSection}>
                    <input
                        type="text"
                        placeholder="Search Businesses"
                        className={styles.searchField}
                        value={searchTerm}
                        onChange={handleSearchTerm}
                    />
                    <input
                        type="text"
                        placeholder="Where?"
                        className={styles.searchField}
                        value={searchLocation}
                        onChange={handleSearchLocation}
                    />
                </div>
                <Button type="submit" className={styles.searchButton}>Let's Go</Button>
            </form>
        </div> // The search terms + button need to be wrapped in a <form>. Then the "onSubmit" will be in the opening tag of the <form>
    )
};

export default SearchBar;