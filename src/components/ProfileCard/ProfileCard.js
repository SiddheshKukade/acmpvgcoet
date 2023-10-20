import * as React from "react";
import Card from "@mui/material/Card";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "./ProfileCard.module.css"


export function MultiActionAreaCard({
  photoUrl,
  title,
  desc,
  btnTitle,
  btnLink,
  btnData,
}) {
  return (
    <Card>
		<div className={styles.card}>
			<div className={styles.card_img}> 
				<img src={photoUrl} alt={title}></img>
			</div>
			<div className={styles.card_title}>
				{title}		
			</div>
			<div className={styles.card_descr}>
				{desc}		
			</div>
		</div>
      <CardActions className={styles.card_buttons} >
        {btnData ? (
          btnData.map((btn) => (
            <Button
              size="small"
              color="primary"
              href={btn.link}
              target="_blank"
            >
              {btn.title}
            </Button>
          ))
        ) : (
          <Button size="small" color="primary" href={btnLink}>
            {btnTitle}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
const ProfileCard = ({
  photoUrl,
  title,
  desc,
  desg,
  btnTitle,
  btnLink,
  btnData,
}) => {
  return (
    <MultiActionAreaCard
      photoUrl={photoUrl}
      title={title}
      desc={desc}
      desg={desg}
      btnTitle={btnTitle}
      btnLink={btnLink}
      btnData={btnData}
    />
  );
};

export default ProfileCard;
