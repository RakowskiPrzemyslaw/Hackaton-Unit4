import { TOGGLE_SIDEBAR, FETCH_USER } from './types';
import axios from 'axios';

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});


export const fetchUser = (id, cb) => {
  const url = `http://localhost:3000/users/${id}`;
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({ data }) => {
      console.log(data)
      dispatch({
        type: FETCH_USER,
        payload: data,
      });
      cb();
    });
  };
};
