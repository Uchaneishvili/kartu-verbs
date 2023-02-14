import React, { useState } from "react";
import styles from "./SearchBar.module.css";

import SearchIcon from "../../icons/searchBarIcon";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search any word"
          autoFocus
        />
        
        <button type="submit" className={styles.searchButtom}>
            
      {/* <SearchIcon /> */}
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
