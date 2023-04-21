import axios from "axios";

const myApi = axios.create({
  baseURL: "https://games-database.onrender.com/api",
});

export const fetchReviews = (page, limit, sortOption, category) => {
  if (sortOption === "newest" && (!category || category === "view all")) {
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}`)
      .then((response) => {
        return response.data.reviews;
      });
  } else if (sortOption === "newest") {
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}&category=${category}`)
      .then((response) => {
        return response.data.reviews;
      });
  }

  if (sortOption === "oldest" && (!category || category === "view all")) {
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}&order=ASC`)
      .then((response) => {
        return response.data.reviews;
      });
  } else if (sortOption === "oldest") {
    return myApi
      .get(
        `/reviews?page=${page}&limit=${limit}&category=${category}&order=ASC`
      )
      .then((response) => {
        return response.data.reviews;
      });
  }
  if (sortOption === "most votes" && (!category || category === "view all")) {
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}&sort_by=votes`)
      .then((response) => {
        return response.data.reviews;
      });
  } else if (sortOption === "most votes") {
    return myApi
      .get(
        `/reviews?page=${page}&limit=${limit}&category=${category}&sort_by=votes`
      )
      .then((response) => {
        return response.data.reviews;
      });
  }
  if (
    sortOption === "most comments" &&
    (!category || category === "view all")
  ) {
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}&sort_by=comment_count`)
      .then((response) => {
        return response.data.reviews;
      });
  } else if (sortOption === "most comments") {
    return myApi
      .get(
        `/reviews?page=${page}&limit=${limit}&category=${category}&sort_by=comment_count`
      )
      .then((response) => {
        return response.data.reviews;
      });
  }
  if (sortOption === "least votes" && (!category || category === "view all")) {
    return myApi
      .get(`/reviews?page=${page}&limit=${limit}&sort_by=votes&order=ASC`)
      .then((response) => {
        return response.data.reviews;
      });
  } else if (sortOption === "least votes") {
    return myApi
      .get(
        `/reviews?page=${page}&limit=${limit}&category=${category}&sort_by=votes&order=ASC`
      )
      .then((response) => {
        return response.data.reviews;
      });
  }
  if (
    sortOption === "least comments" &&
    (!category || category === "view all")
  ) {
    return myApi
      .get(
        `/reviews?page=${page}&limit=${limit}&sort_by=comment_count&order=ASC`
      )
      .then((response) => {
        return response.data.reviews;
      });
  } else if (sortOption === "least comments") {
    return myApi
      .get(
        `/reviews?page=${page}&limit=${limit}&category=${category}&sort_by=comment_count&order=ASC`
      )
      .then((response) => {
        return response.data.reviews;
      });
  }
};

export const fetchReview = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((response) => {
    return response.data.review[0];
  });
};

export const fetchComments = (review_id) => {
  return myApi
    .get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => console.log(err));
};

export const fetchUser = (username) => {
  return myApi
    .get(`/users/${username}`)
    .then((response) => {
      return response.data.user;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchReviewVotes = (review_id, num) => {
  return myApi.patch(`/reviews/${review_id}`, { inc_votes: num });
};

export const patchCommentVotes = (comment_id, num) => {
  return myApi.patch(`/comments/${comment_id}`, { inc_votes: num });
};

export const postComment = (commentObject, review_id) => {
  return myApi
    .post(`/reviews/${review_id}/comments`, commentObject)
    .then((response) => {
      return response.data.comment;
    });
};

export const fetchCategories = () => {
  return myApi.get(`/categories`).then((response) => {
    return response.data.categories;
  });
};

export const deleteComment = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`);
};

export const fetchUsers = () => {
  return myApi.get(`/users`).then((response) => {
    return response.data.users;
  });
};
