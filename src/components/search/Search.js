import React from "react";
import styles from "./styles.module.css";
import { setSearchValue } from "../../redux/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.notes.searchValue);

  const handleSearch = (targetvalue) => {
    dispatch(setSearchValue(targetvalue));
  };

  return (
    <div>
      <input
        className={styles.searchinput}
        placeholder="Search..."
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
