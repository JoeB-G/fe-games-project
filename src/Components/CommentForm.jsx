import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { useState, useContext, useEffect } from "react";
import { fetchUser, postComment } from "../api";
import { UserContext } from "../Context/User";

const CommentForm = ({
  setCommentErr,
  setShowCommentForm,
  review_id,
  commentsArray,
  setCommentsArray,
}) => {

  const [newComment, setNewComment] = useState("");
  const {user} = useContext(UserContext)
  const [userObject, setUserObject] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  useEffect(() => {
    fetchUser(user).then((response) => {
    setUserObject(response)
  })}, [setUserObject, user])

  const handleEnter = () => {
    if (newComment) {
      setShowCommentForm(false);
      const commentObject = { username: userObject.username, body: newComment };
      postComment(commentObject, review_id, userObject.username)
        .then((newComment) => {
          setCommentsArray([newComment, ...commentsArray]);
        })
        .catch(() => {
          setCommentErr(true);
          setCommentsArray(commentsArray.slice(1));
        });
    }
    else {
      setShowErrorMessage(true)
    }
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar src={userObject.avatar_url} />}
        title={userObject.username}
      />
      <CardContent>
        <TextField
          onKeyDown={(keyPressed) => {
            if (keyPressed.key === "Enter") {
              keyPressed.preventDefault();
              handleEnter();
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
      </CardContent>
      {showErrorMessage ? <p>Cannot submit empty comment</p> : null}
    </Card>
  );
};

export default CommentForm;
