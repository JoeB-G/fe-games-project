import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Card sx={{ width: 416, height: 400, margin: "0.5rem" }}>
      <Link
        to={`/reviews/${review.review_id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          height="200"
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
      </Link>
    </Card>
  );
};

export default ReviewCard;
