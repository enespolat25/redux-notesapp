import React from 'react'
import styles from "./styles.module.css";

function Search() {
    return (
        <div>
            <input className={styles.searchinput} placeholder="Search..." type="text" />
        </div>
    )
}

export default Search
