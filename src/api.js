import axios from "axios";

const myApi = axios.create({
  baseURL: "https://games-database.onrender.com/api",
});

export const fetchReviews = (page, limit) => {
  return myApi
    .get(`/reviews?page=${page}&limit=${limit}`)
    .then((response) => {
      return response.data.reviews;
    })
    .catch((err) => console.log(err));
};

export const fetchReview = (review_id) => {
  return myApi
    .get(`/reviews/${review_id}`)
    .then((response) => {
      return response.data.review[0]
    })
    .catch((err) => console.log(err))
}
