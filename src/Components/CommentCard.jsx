import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import IconButton from '@mui/material/IconButton';
import { fetchUser } from "../api";
import { useEffect, useState } from "react";


const CommentCard = ({ comment }) => {
  const [userAvatar, setUserAvatar] = useState("")
  
useEffect(() => {
  fetchUser(comment.author).then((response) => {
    setUserAvatar(response.avatar_url)
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
          <IconButton><KeyboardDoubleArrowUpIcon/></IconButton>
          <Button size="medium" disabled>{comment.votes}</Button>
          <IconButton><KeyboardDoubleArrowDownIcon/></IconButton>
        <Button size="small">Delete Comment</Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
