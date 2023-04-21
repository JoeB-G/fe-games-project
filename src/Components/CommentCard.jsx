import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { fetchUser } from "../api";
import { useEffect, useState, useContext } from "react";
import CommentsVote from "./CommentsVote";
import CommentDelete from "./CommentDelete";
import { UserContext } from "../Context/User";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [userAvatar, setUserAvatar] = useState("");
  const [currentComment, setCurrentComment] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteFailed, setDeleteFailed] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  useEffect(() => {
    fetchUser(comment.author).then((response) => {
      setUserAvatar(response.avatar_url);
      setCurrentComment(comment);
    });
  }, [setUserAvatar, comment]);

  return (
    <Card sx={{ width: 500, margin: "0.5rem" }}>
      {!isDeleted ? (
        <div>
          <CardHeader
            avatar={<Avatar src={userAvatar} />}
            title={comment.author}
            subheader={moment(comment.created_at).format("DD/MM/YYYY HH:mm")}
          />
          <CardContent>
            <Typography paragraph>{comment.body}</Typography>
            {deleteFailed ? (
              <p style={{ fontSize: "70%", color: "red" }}>
                Delete Unsuccessful, please try again
              </p>
            ) : null}
          </CardContent>
          <CardActions>
            <CommentsVote
              currentComment={currentComment}
              setCurrentComment={setCurrentComment}
            />
            {user === comment.author ? (
              <CommentDelete
                comment_id={comment.comment_id}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
                setDeleteFailed={setDeleteFailed}
                setShowDeleteSuccess={setShowDeleteSuccess}
              />
            ) : null}
          </CardActions>
        </div>
      ) : null}
      {showDeleteSuccess ? <p>Delete Successful</p> : null}
    </Card>
  );
};

export default CommentCard;
