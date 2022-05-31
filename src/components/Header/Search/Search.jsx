import React from "react";
import styles from "./Search.module.css";
import { CgSearch } from "react-icons/cg";
import { IoCloseCircleSharp } from "react-icons/io5";

const Search = ({ text, setText }) => {
  return (
    <div className={styles.form}>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Найти нужный товар"
      />
      <span>
        <CgSearch />
      </span>
      {!!text.length && (
        <button onClick={() => setText("")}>
          <IoCloseCircleSharp />
        </button>
      )}
    </div>
  );
};

export default Search;