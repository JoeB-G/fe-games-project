import { useEffect, useState } from "react";
import { fetchReviews } from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import Footer from "./Footer.jsx";
import SortByMenu from "./SortByMenu.jsx";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("newest")
  const [reviewsArray, setReviewsArray] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchReviews(currentPage, limit, sortOption).then((data) => {
      setReviewsArray(data);
    });
  }, [setReviewsArray, currentPage, limit, sortOption]);

  return (
    <div>
         <SortByMenu setSortOption={setSortOption}/>
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
