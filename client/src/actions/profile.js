import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user's profile
export const getProfile = () => async dispatch => {
  try {
    const response = await axios.get('/api/profile/me');

    dispatch({ type: GET_PROFILE, payload: response.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.post('/api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: response.data
    });

    dispatch(
      setAlert(edit ? 'Profile Updated!' : 'Profile Created!', 'success')
    );

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
