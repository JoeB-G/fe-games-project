import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Button from "@mui/material/Button";
import { fetchUser } from "../api";
import { useEffect, useState } from "react";
import CommentsVote from "./CommentsVote";


const CommentCard = ({ comment }) => {
  const [userAvatar, setUserAvatar] = useState("");
  const [currentComment, setCurrentComment] = useState("")
  
useEffect(() => {
  fetchUser(comment.author).then((response) => {
    setUserAvatar(response.avatar_url)
    setCurrentComment(comment)
  })
},[setUserAvatar, comment])


  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar src={userAvatar} />
        }
        title={comment.author}
        subheader={moment(comment.created_at).format("DD/MM/YYYY HH:mm")}
      />
      <CardContent>
        <Typography paragraph>{comment.body}</Typography>
      </CardContent>
      <CardActions>
        <CommentsVote  currentComment={currentComment} setCurrentComment={setCurrentComment}/>
        <Button size="small">Delete Comment</Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
