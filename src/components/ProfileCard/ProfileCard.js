import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../../custom.css";
export function MultiActionAreaCard({
  photoUrl,
  title,
  desc,
  btnTitle,
  btnLink,
  btnData,
}) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" height="340" image={photoUrl} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
