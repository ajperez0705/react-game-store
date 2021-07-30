import React, { useState } from "react";

import styles from "./SearchBar.module.css";

function SearchBar({ submit }) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputValue);

    submit(inputValue, e);

    // setInputValue("");
  };

  return (
    <div>
      <form action="Submit" onSubmit={submitHandler}>
        <input
          onChange={inputChangeHandler}
          className={styles.form}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
