import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { patchCommentVotes } from "../api";

const CommentsVote = ({currentComment, setCurrentComment}) => {

  const [err, setErr] = useState(null);
  const [disableUpvote, setDisableUpvote] = useState(false);
  const [disableDownvote, setDisableDownvote] = useState(false);

  const handleUpvoteClicked = () => {
    if (!disableUpvote && !disableDownvote) {
        setCurrentComment({...currentComment, votes: currentComment.votes + 1})
      setDisableUpvote(true);
      patchCommentVotes(currentComment.comment_id
, 1).catch(() => {
        setCurrentComment({...currentComment, votes: currentComment.votes - 1});
        setErr("Something went wrong, please try again.");
      });
    } else if (!disableUpvote) {
        setCurrentComment({...currentComment, votes: currentComment.votes + 1});
      setDisableDownvote(false);
      patchCommentVotes(currentComment.comment_id
, 1).catch(() => {
        setCurrentComment({...currentComment, votes: currentComment.votes - 1});
        setErr("Something went wrong, please try again.");
      });
    }
  };

  const handleDownvoteClicked = () => {
    if (!disableDownvote && !disableUpvote) {
        setCurrentComment({...currentComment, votes: currentComment.votes - 1});
      setDisableUpvote(false);
      setDisableDownvote(true);
      patchCommentVotes(currentComment.comment_id
, -1).catch(() => {
        setCurrentComment({...currentComment, votes: currentComment.votes + 1})
        setErr("Something went wrong, please try again.");
      });
    } else if (!disableDownvote) {
        setCurrentComment({...currentComment, votes: currentComment.votes - 1})
      setDisableUpvote(false);
      patchCommentVotes(currentComment.comment_id
, -1).catch(() => {
        setCurrentComment({...currentComment, votes: currentComment.votes + 1})
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
        {currentComment.votes}
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

export default CommentsVote;