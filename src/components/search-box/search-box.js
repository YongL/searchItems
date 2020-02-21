import React from "react";
import "./search-box.css";

const SearchBox = ({ placeholder, searchChange }) => (
  <input type="search" placeholder={placeholder} onChange={searchChange} />
);

export default SearchBox;
