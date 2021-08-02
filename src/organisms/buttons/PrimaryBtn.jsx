import React from "react";
import style from "../buttons/PrimaryBtn.module.css";

function PrimaryBtn({ content, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={style["primary-btn"]}>
        {content}
      </button>
    </div>
  );
}

export default PrimaryBtn;
