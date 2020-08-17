import { GET_POSTS, POST_ERROR } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  singlePost: null,
  loading: true,
  errorMessage: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        errorMessage: payload,
        loading: false
      };
    default:
      return state;
  }
};
