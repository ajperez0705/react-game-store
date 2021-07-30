import React, { useState } from "react";

import styles from "./SearchBar.module.css";

function SearchBar({ submit }) {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setInputValue(e.target.value);

    submit(inputValue, e);

    setInputValue("");
  };

  return (
    <div>
      <form action="Submit" onSubmit={submitHandler}>
        <input className={styles.form} type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
