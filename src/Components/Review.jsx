import { useParams } from "react-router-dom";
import { fetchReview } from "../api";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState("");

  useEffect(() => {
    fetchReview(review_id).then((review) => {
      setReview(review);
    });
  }, [setReview, review_id]);

  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        height="300px"
        image={review.review_img_url}
        alt={`image for ${review.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {review.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {review.review_body}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="medium">Give Kudos {review.votes}</Button>
        <Button size="medium">View Comments {review.comment_count}</Button>
        <Button size="medium">Delete Review</Button>
      </CardActions>
    </Card>
  );
};


export default Review;
