import { useEffect, useState } from "react";
import { fetchComments } from "../api.js";
import CommentCard from "./CommentCard.jsx";

const Comments = ({ review_id, commentsArray, setCommentsArray }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments(review_id).then((data) => {
      setCommentsArray(data);
      setIsLoading(false);
    });
  }, [setCommentsArray, review_id]);

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      {commentsArray.length ? (
        <main>
          {commentsArray.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
        </main>
      ) : (
        <p>No comments yet!</p>
      )}
    </div>
  );
};

export default Comments;
