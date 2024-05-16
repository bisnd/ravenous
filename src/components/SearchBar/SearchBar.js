import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import styles from './SearchBar.module.css';

const sortBy = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar ({searchYelp}) { // Using destructuring syntax so that "SearchBar" can receive the "searchYelp" prop from "App.js". Alternatively could have used "props" as the parameter, and then in the event handler function "handleSubmit" could have accessed the "searchYelp" value of the "props" object using the dot notation "props.searchYelp" 
    const [sortingOption, setSortingOption] = useState("best_match");
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
    };

    function handleSearchTerm ({target}) {
        setSearchTerm(target.value);
    };

    function handleSearchLocation ({target}) {
        setSearchLocation(target.value);
    };

    function handleSubmit (event) {
        event.preventDefault(); // Prevents the form from performing the default action
        console.log(`Form submitted with: ${searchLocation}, ${searchTerm}, ${sortingOption}`);
        // let formattedSearchTerm = searchTerm.replaceAll(' ', '%20')
        searchYelp(searchLocation, searchTerm, sortingOption);
    };

    return (
        <div className={styles.banner}>
            <div>
                <ButtonGroup className={styles.sortGroup}>
                    {Object.keys(sortBy).map((sortByKey) => ( // Sorting through the keys
                        <Button
                            key={sortBy[sortByKey]} // The "key" is the value corresponding to the specific sortOption key (using bracket notation) - Ex. "best_match"
                            variant="outline-light"
                            className={sortOptionStyle(sortBy[sortByKey])} // Passing the value corresponding to the specific key, to the sortOptionStyle function which changes the class of the button
                            onClick={() => {
                                handleSortingOption(sortBy[sortByKey])
                            }}
                        >
                            {sortByKey}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.searchSection}>
                    <input
                        placeholder="Search Businesses"
                        className={styles.searchField}
                        value={searchTerm}
                        onChange={handleSearchTerm}
                    />
                    <input
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