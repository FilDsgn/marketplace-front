import React, { useState } from "react";
import "./searchForm.scss";
import { ISearchForm } from "./searchForm.types";

import block from "bem-cn-lite";
const b = block("search-form");

const SearchForm = ({ onSearch, placeholder }: ISearchForm) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    setTimeout(() => {
      onSearch(e.target.value.toLowerCase());
    }, 700);
  };

  const handleSearchButtonClick = (e: any) => {
    e.preventDefault();

    onSearch(input.toLowerCase());
  };

  return (
    <section className={b()}>
      <div className={b("container")}>
        <form className={b("form")}>
          <input
            placeholder={placeholder}
            value={input}
            onChange={handleInputChange}
            className={b("input")}
          ></input>
          <button
            onClick={handleSearchButtonClick}
            className={b("button")}
          ></button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
