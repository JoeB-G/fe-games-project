import { useEffect, useState } from "react";
import { fetchReviews } from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import Footer from "./Footer.jsx";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [reviewsArray, setReviewsArray] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const {category} = useParams()
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    fetchReviews(currentPage, limit, category).then((data) => {
      setReviewsArray(data);
      setIsLoading(false)
    });
  }, [setReviewsArray, currentPage, limit, category]);

  return (
    <div>
      {isLoading ? <p>Loading</p> : null}
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
