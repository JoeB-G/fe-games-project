import { useEffect, useState } from "react";
import { fetchComments } from "../api.js";
import CommentCard from "./CommentCard.jsx";

const Comments = ({ review_id }) => {
  const [commentsArray, setCommentsArray] = useState("");

  useEffect(() => {
    fetchComments(review_id).then((data) => {
      setCommentsArray(data);
    });
  }, [setCommentsArray, review_id]);

  return (
    <div>
      {commentsArray ? (
        <main>
          {commentsArray.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}{" "}
        </main>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Comments;
