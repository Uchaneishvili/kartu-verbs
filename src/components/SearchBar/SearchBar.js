/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.css";
import { Form } from "antd";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/DetailPage");
  };

  return (
    <div className={styles.searchContainer}>
      <Form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search any word"
          autoFocus
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className={styles.searchButton}
        >
          Search
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;
