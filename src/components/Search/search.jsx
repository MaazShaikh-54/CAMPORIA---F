import "./search.css";
import Fuse from "fuse.js";
import Button from "../Button/button";
import { useState, useEffect } from "react";
import CampsiteCard from "../Card/card";
import campsites from "./campsiteData";

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() })) 
    .sort((a, b) => a.sort - b.sort) 
    .map(({ value }) => value); 
};

const CampsiteList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setSearchResults(shuffleArray(campsites)); 
  }, []);

  const fuse = new Fuse(campsites, {
    keys: ["campsiteName", "price"],
    includeScore: true,
    threshold: 0.4,
  });

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
    setErrorMessage(false); 
  };

  const handleSearchClick = () => {
    if (!searchTerm.trim() && !hasSearched) {
      setErrorMessage(true);
  
      // setTimeout(() => {
      //   setErrorMessage(false);
      // }, 4800); // Wait before fading out
  
      const inputElement = document.querySelector(".search-input");
    inputElement.classList.add("shake");

      setTimeout(() => {
        setErrorMessage(false); // Hide completely
      }, 5000);
  
      setSearchResults(shuffleArray(campsites)); 
      return;
    }
  
    if (!searchTerm.trim()) {
      setHasSearched(false);
      setSearchResults(shuffleArray(campsites)); 
      return;
    }
  
    const results = fuse.search(searchTerm).map((result) => result.item);
    setSearchResults(results.length ? results : []);
    setHasSearched(true);
  };

  return (
    <div className="card-section">
      <div className="searchbox">
        <input
          type="search"
          name="search"
          placeholder="Search Destination.."
          value={searchTerm}
          onChange={handleSearchInput}
          className="search-input"
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
        />
        <Button text="Search" onClick={handleSearchClick} />
      </div>
      {errorMessage && <div className="error-message show">Type something to explore!</div>}
      <div className="campsite-card-container">
        {searchResults.map((campsite) => (
          <CampsiteCard
            key={campsite.id}
            id={campsite.id}
            imageUrl={campsite.imageUrl}
            campsiteName={campsite.campsiteName}
            price={campsite.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CampsiteList;
