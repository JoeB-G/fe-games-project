import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import moment from "moment";

const ReviewCard = ({ review }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={review.review_img_url}
          alt={`image for ${review.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {review.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {review.category}
            <br></br>
            By {review.owner}
            <br></br>
            Posted {moment(review.created_at).format("DD/MM/YYYY HH:mm")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ReviewCard;
