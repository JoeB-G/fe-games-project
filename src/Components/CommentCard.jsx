import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { fetchUser } from "../api";
import { useEffect, useState } from "react";
import CommentsVote from "./CommentsVote";
import CommentDelete from "./CommentDelete";


const CommentCard = ({ comment }) => {
  const [userAvatar, setUserAvatar] = useState("");
  const [currentComment, setCurrentComment] = useState("")
  const [isDeleted, setIsDeleted] = useState(false)

useEffect(() => {
  fetchUser(comment.author).then((response) => {
    setUserAvatar(response.avatar_url)
    setCurrentComment(comment)
  })
},[setUserAvatar, comment])


  return (
    <Card sx={{ width: 500 }}>
      {!isDeleted ? <div>
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
        <CommentDelete comment_id={comment.comment_id} isDeleted={isDeleted} setIsDeleted={setIsDeleted}/>
      </CardActions> 
      </div> : null
    }
    </Card> 
  );
};

export default CommentCard;
