import React from "react";
import styles from "./styles.module.css";

function Textarea() {
  return (
    <div className={styles.textareaKapsayici}>
      <textarea
        className={styles.mytextarea}
        placeholder="Enter your note here..."
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className={styles.colorbtnsContainer}>
        <button className={styles.redbtn}></button>
        <button className={styles.purplebtn}></button>
        <button className={styles.yellowbtn}></button>
        <button className={styles.aquabtn}></button>
        <button className={styles.greenbtn}></button>
      </div>
      <div className={styles.addbtnContainer}>
        <button className={styles.addbtn}>ADD</button>
      </div>
    </div>
  );
}

export default Textarea;
