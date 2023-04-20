import { useEffect, useState } from "react";
import { fetchReviews } from "../api.js";
import ReviewCard from "./ReviewCard.jsx";
import Footer from "./Footer.jsx";
import SortByMenu from "./SortByMenu.jsx";
import { useParams } from "react-router-dom";
import CategorySelect from "./CategorySelect";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("newest")
  const [reviewsArray, setReviewsArray] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const {category} = useParams()
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    fetchReviews(currentPage, limit, sortOption, category).then((data) => {
      setReviewsArray(data);
      setIsLoading(false)
    });
  }, [setReviewsArray, currentPage, limit, sortOption, category]);

  return (
    <div>
      <SortByMenu setSortOption={setSortOption}/>
      <CategorySelect />
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
