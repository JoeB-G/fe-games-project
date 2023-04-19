import { useParams } from "react-router-dom";
import { fetchReview } from "../api";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Comments from "./Comments";
import ReviewVote from "./ReviewVote";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [setReview, review_id]);

  if (isLoading) {
    return <p>Loading</p>;
  }
  

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
        <ReviewVote review={review} setReview={setReview}/>
        <Button size="small">Delete Review</Button>
      </CardActions>
      <Comments review_id={review_id} />
    </Card>
  );
};

export default Review;
