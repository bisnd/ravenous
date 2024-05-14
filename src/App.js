import React from 'react';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from "./components/SearchBar/SearchBar";

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

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
