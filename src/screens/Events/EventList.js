import { Fragment, useState } from "react";
import { urlFor } from "../../client";
import styles from "./EventList.module.css";

const EventList = ({ featureData, title, events }) => {

	const [activeEvent, setActiveEvent] = useState(null);

	const handleToggle = (eventId) => {
	  if (eventId === activeEvent) {
		 // If the same event is clicked again, close it.
		 setActiveEvent(null);
	  } else {
		 // Open the clicked event and close others.
		 setActiveEvent(eventId);
	  }
	};

  return (
    <div className={`${styles.featuresWrapper} center`}>
      <div className={styles.featuresHeading}>
        <p>{title}</p>
      </div>
      <p></p>
      <div className={`${styles.featuresListWrapper} `}>
        <div className={`${styles.featuresList} `}>
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
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                </Fragment>
              </div>
            );
          })} */}

          {events.map(({ title, _id, date, description, slug, mainImage }) => {
				const isOpen = _id === activeEvent;

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

                  <div
                    className={`${styles.featureDescription} ${
                      isOpen ? styles.active : ''
                    }`}
                  >
						<p style={{ textAlign: 'justify' }}>{description}</p>
                  </div>
						<button
                    onClick={() => handleToggle(_id)}
                    className={styles.feature_button}
                  >
                    {isOpen ? 'HIDE' : 'SEE MORE'}
                  </button>
                </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button className={styles.shopBtn}>SEE MORE</button> */}
    </div>
  );
};

export default EventList;
