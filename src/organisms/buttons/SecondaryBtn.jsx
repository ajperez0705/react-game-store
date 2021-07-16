import React from "react";
import style from "../buttons/SecondaryBtn.module.css";

function SecondaryBtn({ content }) {
  return (
    <div>
      <button classname={style["secondary-btn"]}>{content}</button>
    </div>
  );
}

export default SecondaryBtn;
