import React, { useState } from "react";
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from "./components/SearchBar/SearchBar";
import Yelp from "./utils/Yelp";

/*
const sampleBusiness = {
  image: "https://sushiandsalad.com/cdn/shop/files/DSC05249.png?v=1710291025",
  name: "Sushi and Salad",
  address: "5A Cross Street",
  city: "Saffron Walden",
  state: "England",
  zipcode: "CB10 1EX",
  category: "Sushi",
  rating: 4.8,
  reviewcount: 442
}

const businesses = [sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness, sampleBusiness];
*/

function App() {
  const [businesses, setBusinesses] = useState([]); // Using the `useState` hook in `App.js` to handle the "businesses" array ensures that your app will re-render when the data updates, displaying the latest fetched data from Yelp. This involves initializing a state variable and setting up a function to update this state. When we use setBusinesses (state setter function) it triggers a re-render of App.js and any child components that depend on this state, like BusinessList (which has "businesses" as a prop).

  // The "searchYelp" function is necessary in App.js because it bridges the gap between the pure function that fetches data (Yelp) and the React component (App.js) that must manage state and re-render based on that data. This design adheres to best practices in React development by keeping API interactions and state management duties cleanly separated and well-organized.

  const searchYelp = async (searchLocation, searchTerm, sortingOption) => { // "searchYelp" connects the API logic with React’s state management. It uses "Yelp" to get the data and then updates the React state with the results.
    const businessData = await Yelp(searchLocation, searchTerm, sortingOption); // Saves the array returned by the function "Yelp", in a variable named "businessData". "Yelp" uses the parameters passed in as "searchYelp"'s parameters. We need to use "await" before the "Yelp" function because it is an asynchronous function, so "await" halts the execution until the Promise/Yelp is resolved.
    setBusinesses(businessData); // Updates the state with the fetched data
  };

  // `App.js` passes the `searchYelp` function to `SearchBar` as a prop so that it can be used in `SearchBar` to trigger the Yelp API calls. So `SearchBar` trigger updates to the `App`'s state ('businesses'), which then flows down to `BusinessList`
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
    </div>
  ); 
};

export default App;
