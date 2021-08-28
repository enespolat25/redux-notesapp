import { useState } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { setColor, toggleCheck } from "../../redux/colors/colorsSlice";

function Textarea() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const color = useSelector((state) => state.colors.color);
  const colorbtns = useSelector((state) => state.colors.colorbtns);

  const handleAdd = () => {
    dispatch(addNote({ text: text, color: color }));
    setText("");
  };

  const handleColor = (value) => {
    dispatch(setColor(value));
    dispatch(toggleCheck(value));
  };

  return (
    <div className={styles.textareaKapsayici}>
      <textarea
        className={styles.mytextarea}
        placeholder="Enter your note here..."
        name=""
        id=""
        // cols="30"
        // rows="10"
        value={text}
        onChange={(e) => setText(e.target.value, e.target)}
      ></textarea>
      <div className={styles.colorbtnsContainer}>
        {colorbtns.map((btn) => (
          <button
            onClick={(e) => handleColor(e.target.value)}
            value={btn.value}
            className={`${btn.value} ${btn.checked ? `${styles.checked}` : ""}`}
          ></button>
        ))}
      </div>
      <div className={styles.addbtnContainer}>
        <button className={`${styles.addbtn}`} onClick={() => handleAdd()}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default Textarea;
