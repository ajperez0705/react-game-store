import React from "react";
import style from "../buttons/PrimaryBtn.module.css";

function PrimaryBtn({ content }) {
  return (
    <div>
      <button className={style["primary-btn"]}>{content}</button>
    </div>
  );
}

export default PrimaryBtn;
