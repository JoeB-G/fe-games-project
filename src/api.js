import axios from "axios";

const myApi = axios.create({
  baseURL: "https://games-database.onrender.com/api",
});

export const fetchReviews = (page, limit, category) => {
  if (category === "view all" || !category){
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}`)
      .then((response) => {
        return response.data.reviews;
      })
      .catch((err) => console.log(err));
  }
  else {return myApi
  .get(`/reviews?page=${page}&limit=${limit}&category=${category}`)
  .then((response) => {
    return response.data.reviews;
  })
  .catch((err) => console.log(err));}
};

export const fetchReview = (review_id) => {
  return myApi
    .get(`/reviews/${review_id}`)
    .then((response) => {
      return response.data.review[0]
    })
    .catch((err) => console.log(err))
}


export const fetchComments = (review_id) => {
  return myApi
    .get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data.comments
    })
    .catch((err) => console.log(err))
}

export const fetchUser = (username) => {
  return myApi.get(`/users/${username}`)
    .then((response) => {
      return response.data.user
    })
    .catch((err) => {console.log(err)})
}

export const patchReviewVotes = (review_id, num) => {
  return myApi.patch(`/reviews/${review_id}`, {inc_votes: num})
}

export const patchCommentVotes = (comment_id, num) => {
  return myApi.patch(`/comments/${comment_id}`, {inc_votes: num})
}

export const postComment = (commentObject, review_id) => {
  return myApi.post(`/reviews/${review_id}/comments`, commentObject)
  .then((response) => {
    return response.data.comment
  })
}

export const fetchCategories = () => {
  return myApi.get(`/categories`)
  .then((response) => {
    return response.data.categories
  })
}