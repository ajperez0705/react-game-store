import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import styles from "../layout/HeroProdCard.module.css";

function HeroProdCard({ data }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles["left-panel"]}>
          <h1 className={styles.title}>{data.name}</h1>
          <div className={styles.ctas}>
            <PrimaryBtn className={styles.btn} content="Add to Cart" />
            <SecondaryBtn className={styles.btn} content="Learn More" />
          </div>
        </div>
        <div className={styles["right-panel"]}>
          <img
            className={styles["hero-screenshots"]}
            src="https://i.ytimg.com/vi/_UB5hpk0iqg/maxresdefault.jpg"
            alt=""
          />
          <img
            className={styles["hero-screenshots"]}
            src="https://images.firstpost.com/wp-content/uploads/2019/05/Grand-Theft-Auto-poster.jpg"
            alt=""
          />
          <img
            className={styles["hero-screenshots"]}
            src="https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroProdCard;
