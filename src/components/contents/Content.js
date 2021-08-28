import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Content() {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <ul className={styles.contentContainer}>
      {notes.map((note) => (
        <li key={note.id} className={note.color}>
          <p>{note.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Content;
