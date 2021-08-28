import React from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { destroyNote } from "../../redux/notes/notesSlice";

function Content() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.notes.searchValue);
  const notes = useSelector((state) => state.notes.notes);

  let filtered = notes;
  if (searchValue && searchValue !== "") {
    const aranacakkelime = searchValue.toLowerCase();
    if (aranacakkelime && aranacakkelime !== "") {
      filtered = notes.filter((note) =>
        note.text.toLowerCase().includes(aranacakkelime)
      );
    } else {
      filtered = notes;
    }
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("content id", id);
      dispatch(destroyNote(id));
    }
  };
  return (
    <ul className={styles.contentContainer}>
      {filtered.map((note) => (
        <li key={note.id} className={note.color}>
          <p>{note.text}</p>
          <button
            className={styles.delete}
            onClick={() => handleDelete(note.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Content;
