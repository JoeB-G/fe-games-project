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
import VotesButtons from "./VotesButtons";
import { patchCommentVotes } from "../api";

const CommentCard = ({ comment }) => {
  const [userAvatar, setUserAvatar] = useState("")
  const [currentComment, setCurrentComment] = useState(comment)
  
useEffect(() => {
  fetchUser(currentComment.author).then((response) => {
    setUserAvatar(response.avatar_url)
  })
},[setUserAvatar, currentComment])


  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar src={userAvatar} />
        }
        title={currentComment.author}
        subheader={moment(currentComment.created_at).format("DD/MM/YYYY HH:mm")}
      />
      <CardContent>
        <Typography paragraph>{currentComment.body}</Typography>
      </CardContent>
      <CardActions>
        <VotesButtons id={currentComment.review_id} dataObject={currentComment} setDataObject={setCurrentComment} patchFunction={patchCommentVotes}/>
        <Button size="small">Delete Comment</Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
