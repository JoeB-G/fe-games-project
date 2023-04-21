import { useEffect, useState } from "react";
import { fetchReviews } from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import Footer from "./Footer.jsx";
import { useParams } from "react-router-dom";
import ErrorCard from "./ErrorCard.jsx";

const Reviews = ({ sortOption, setSortOption }) => {
  const [reviewsArray, setReviewsArray] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errAPI, setErrAPI] = useState("");

  useEffect(() => {
    fetchReviews(currentPage, limit, sortOption, category)
      .then((data) => {
        setReviewsArray(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrAPI(err.message);
      });
  }, [setReviewsArray, currentPage, limit, sortOption, category]);

  if (errAPI) {
    return <ErrorCard errorMessage={errAPI} />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {isLoading && <p>Loading...</p>}

      {reviewsArray && (
        <main>
          {reviewsArray.map((review) => (
            <ReviewCard review={review} key={review.review_id} />
          ))}
        </main>
      )}

      {!isLoading && !reviewsArray && <p>Loading...</p>}

      {reviewsArray && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Footer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            array={reviewsArray}
            setLimit={setLimit}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
};

export default Reviews;
