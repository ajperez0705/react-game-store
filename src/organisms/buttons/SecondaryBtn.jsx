import React from "react";
import style from "../buttons/SecondaryBtn.module.css";

function SecondaryBtn({ content }) {
  return (
    <div>
      <button className={style["secondary-btn"]}>{content}</button>
    </div>
  );
}

export default SecondaryBtn;
