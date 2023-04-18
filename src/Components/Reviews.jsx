import { useEffect, useState } from "react";
import { fetchReviews } from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import Footer from "./Footer.jsx";

const Reviews = () => {
  const [reviewsArray, setReviewsArray] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchReviews(currentPage, limit).then((data) => {
      setReviewsArray(data);
    });
  }, [setReviewsArray, currentPage, limit]);

  return (
    <div>
      <h1>PLACEHOLDER HEADING</h1>
      {reviewsArray ? (
        <main>
          {reviewsArray.map((review) => {
            return <ReviewCard review={review} key={review.review_id} />;
          })}
          <Footer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            array={reviewsArray}
            setLimit={setLimit}
            limit={limit}
          />
        </main>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Reviews;
