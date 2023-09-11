import React from "react";
import styles from "./History.module.css";
const History = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>History of ACM </h2>
        <div className={styles.slogan}>
          <p>
            ACM, the Association for Computing Machinery, is the world's largest
            educational and scientific society, uniting computing educators,
            researchers and professionals to inspire dialogue, share resources
            and address the field's challenges.
          </p>
          <p>
            It was founded in 1947 and is the world's largest scientific and
            educational computing society.{" "}
          </p>
          <p>
            The ACM is a non-profit professional membership group, claiming
            nearly 110,000 student and professional members as of 2022. Its
            headquarters are in New York City.{" "}
            <a
              className={styles.learn_more}
              href="https://www.acm.org/about-acm/acm-history"
              target="_blank"
            >
              Learn more.
            </a>
          </p>
          <br />
          <hr />
        </div>
      </div>
    </div>
  );
};
export default History;
