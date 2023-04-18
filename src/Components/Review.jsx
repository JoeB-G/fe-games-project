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
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButton from "@mui/material/IconButton";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState("");
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
        <IconButton>
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
        <Button size="medium" disabled>
          {review.votes}
        </Button>
        <IconButton>
          <KeyboardDoubleArrowDownIcon />
        </IconButton>
        <Button size="small">Delete Review</Button>
      </CardActions>
      <Comments review_id={review_id} />
    </Card>
  );
};

export default Review;
