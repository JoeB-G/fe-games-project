import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { postComment } from "../api";

const CommentForm = ({
  user,
  setShowCommentForm,
  review_id,
  commentsArray,
  setCommentsArray,
}) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(false);

  const handleEnter = () => {
    setShowCommentForm(false);
    const commentObject = { username: user.username, body: newComment };
    postComment(commentObject, review_id, user.username)
      .then((newComment) => {
        setCommentsArray([newComment, ...commentsArray]);
      })
      .catch(() => {
        setErr(true);
      });
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar src={user.avatar_url} />}
        title={user.username}
      />
      <CardContent>
        {!err ? (
          <TextField
          onKeyDown={(keyPressed) => {
            if (keyPressed.key === "Enter") {
                keyPressed.preventDefault()
                handleEnter()
            }
          }}
            helperText="Type your comment then press enter to submit"
            label="Comment"
            multiline
            minRows={4}
            fullWidth
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CommentForm;
