import React from "react";
import style from "../buttons/SecondaryBtn.module.css";

function SecondaryBtn({ content, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={style["secondary-btn"]}>
        {content}
      </button>
    </div>
  );
}

export default SecondaryBtn;
