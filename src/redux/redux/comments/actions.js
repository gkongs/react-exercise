import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './types';

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};
const fetchCommentSuccess = comments => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};
const fetchCommentFailure = err => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: err,
  };
};

export const fetchComments = () => {
  return dispatch => {
    dispatch(fetchCommentRequest());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(comments => dispatch(fetchCommentSuccess(comments)))
      .catch(err => dispatch(fetchCommentFailure(err)));
  };
};
