/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.css";
import { SearchOutlined } from "@ant-design/icons";
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
      <button
        onClick={handleSubmit}
        type="submit"
        className={styles.searchButton}
      >
        <SearchOutlined />
      </button>
        <input
          className={styles.searchInput}
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search any word"
          autoFocus
        />
      </Form>
    </div>
  );
};

export default SearchBar;
