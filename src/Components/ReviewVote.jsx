import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { patchReviewVotes } from "../api";

const ReviewVote = ({review, setReview}) => {
  const [err, setErr] = useState(null);
  const [disableUpvote, setDisableUpvote] = useState(false);
  const [disableDownvote, setDisableDownvote] = useState(false);

  const handleUpvoteClicked = () => {
    if (!disableUpvote && !disableDownvote) {
      setReview({ ...review, votes: review.votes + 1 });
      setDisableUpvote(true);
      patchReviewVotes(review.review_id, 1).catch(() => {
        setReview({ ...review, votes: review.votes - 1 });
        setErr("Something went wrong, please try again.");
      });
    } else if (!disableUpvote) {
      setReview({ ...review, votes: review.votes + 1 });
      setDisableDownvote(false);
      patchReviewVotes(review.review_id, 1).catch(() => {
        setReview({ ...review, votes: review.votes - 1 });
        setErr("Something went wrong, please try again.");
      });
    }
  };

  const handleDownvoteClicked = () => {
    if (!disableDownvote && !disableUpvote) {
      setReview({ ...review, votes: review.votes - 1 });
      setDisableUpvote(false);
      setDisableDownvote(true);
      patchReviewVotes(review.review_id, -1).catch(() => {
        setReview({ ...review, votes: review.votes + 1 });
        setErr("Something went wrong, please try again.");
      });
    } else if (!disableDownvote) {
      setReview({ ...review, votes: review.votes - 1 });
      setDisableUpvote(false);
      patchReviewVotes(review.review_id, -1).catch(() => {
        setReview({ ...review, votes: review.votes + 1 });
        setErr("Something went wrong, please try again.");
      });
    }
  };

  return (
    <div>
      <IconButton
        onClick={handleUpvoteClicked}
        color={disableUpvote ? "primary" : "default"}
      >
        <KeyboardDoubleArrowUpIcon />
      </IconButton>
      <Button
        size="medium"
        disabled
      >
        {err ? <p>{err}</p> : null}
        {review.votes}
      </Button>
      <IconButton
        onClick={handleDownvoteClicked}
        color={disableDownvote ? "secondary" : "default"}
      >
        <KeyboardDoubleArrowDownIcon />
      </IconButton>
    </div>
  );
};

export default ReviewVote;
