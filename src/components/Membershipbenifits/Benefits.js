import React from "react";
import styles from "./Benefits.module.css";
const Benifits = ({ title, points }) => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>{title} </h2>
        <div className={styles.slogan}>
          {points ? points.map((pt) => <p>✅ {pt}</p>) : <h1>NO points</h1>}
          <p>
            <a
              className={styles.learn_more}
              href="https://www.acm.org/about-acm/acm-Benifits"
              target="_blank"
            >
              See more Benefits.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Benifits;
