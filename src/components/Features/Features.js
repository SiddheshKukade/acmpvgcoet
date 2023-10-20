import { Fragment } from "react";
import { urlFor } from "../../client";
import styles from "./Features.module.css";

const Features = ({ featureData, title, events }) => {
  return (
    <>
      <div className={`${styles.featuresWrapper} center`}>
        <div className={styles.featuresHeading}>
          <p>{title}</p>
        </div>
        <div className={`${styles.featuresListWrapper} center`}>
          <div className={`${styles.featuresList} center`}>
            {/* {featureData.map(({ feature, description, image }) => {
              return (
                <div className={`${styles.featureDiv} center`}>
                  <Fragment>
                    <div className={styles.feature}>
                      <p>{feature}</p>
                    </div>
                    <div className={styles.featureDescription}>
                      <p>{description}</p>
                    </div>
                    <div>
                      <img
                        className={styles.featureImg}
                        src={image}
                        alt="img"
                      />
                    </div>
                  </Fragment>
                </div>
              );
            })} */}
            {events
              .filter((item, index) => index < 3    )
              .map(({ title, _id, date, description, slug, mainImage }) => {
                return (
                  <div className={`${styles.featureDiv} center`} key={_id}>
                    <Fragment>
                      <div className={styles.imgCont}>
                        <img
                          className={styles.featureImg}
                          src={urlFor(mainImage).width(200).url()}
                          alt="img"
                        />
                      </div>
                      <div className={styles.feature}>
                        <p>{title}</p>
                      </div>
                      <div className={styles.featureDescription}>
                        <p>{description}</p>
                      </div>
                    </Fragment>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <button cl`assName={styles.shopBtn}>SEE MORE</button> */}
      <p
        style={{
          marginRight: "2rem",
          marginLeft: "auto",
          width: "100vw",
          display: "grid",
          placeItems: "center ",
        }}
      >
        <a
          style={{
            color: "blue",
            border: "solid",
            borderWidth: "1px",
            borderRadius: "10px",
            paddingLeft: "1rem",
            paddingTop: ".5rem",
            paddingBottom: ".5rem",
            paddingRight: "1rem",
            backgroundColor: "lightblue",
          }}
          href="/events"
        >
          See more Events
        </a>
      </p>
    </>
  );
};

export default Features;
