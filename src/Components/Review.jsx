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
import CommentForm from "./CommentForm";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false)
  const [commentsArray, setCommentsArray] = useState("");
  const [err, setErr] = useState(false);


  useEffect(() => {
    fetchReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    })
    .catch((err) => {console.log(err)})
  }, [setReview, review_id]);

  if (isLoading) {
    return <p>Loading</p>;
  }
  

  return (
    <Card sx={{width: 416}}>
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
        <Button size="small" onClick={() => {setShowCommentForm(!showCommentForm)}}>{showCommentForm ? <p>Hide Comment</p> : <p>Add Comment</p>}</Button>
        <Button size="small">Delete Review</Button>
      </CardActions>
      {err ? <p>That comment did not succeed, please try again</p> : null}
      {showCommentForm ? <CommentForm setErr={setErr} setShowCommentForm={setShowCommentForm} review_id={review_id} commentsArray={commentsArray} setCommentsArray={setCommentsArray}/> : null}
      <Comments review_id={review_id} commentsArray={commentsArray} setCommentsArray={setCommentsArray}/>
    </Card>
  );
};

export default Review;
