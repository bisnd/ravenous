import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import styles from './SearchBar.module.css';

const sortBy = [
    {"Best Match": "sort_by=best_match&limit=20"},
    {"Highest Rated": "sort_by=rating&limit=20"},
    {"Most Reviewed": "sort_by=review_count&limit=20"}
];

function SearchBar () {
    return (
        <div className={styles.banner}>
            <div>
                <ToggleButtonGroup type="radio" name="sortOptions" defaultValue={0} className={styles.sortGroup}>
                    {sortBy.map((sortOption, index) => (
                        <ToggleButton
                            value={index}
                            id={`sortOption-${index}`}
                            variant="outline-light"
                            className={styles.sortButton}
                        >
                            {Object.keys(sortOption)}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <div>
                <div className={styles.searchSection}>
                    <input placeholder="Search Businesses" className={styles.searchField}/>
                    <input placeholder="Where?" className={styles.searchField}/>
                </div>
                <Button className={styles.searchButton}>Let's Go</Button>
            </div>
        </div>
    )
};

export default SearchBar;