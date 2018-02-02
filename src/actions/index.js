import { TOGGLE_SIDEBAR, FETCH_USER, GET_BOARDS, SKILL_CHANGE } from './types';
import axios from 'axios';

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});


export const fetchUser = (id, cb) => {
  const url = `http://localhost:3000/users/${id}`;
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_USER,
        payload: data,
      });
      cb();
    });
  };
};

export const getBoards = () => {
  const url = `http://localhost:3000/boards`;
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: GET_BOARDS,
        payload: data,
      });
    });
  };
};

export const changeSkillLevel = (name, value) => {
  console.log(value);
  return{
    type: SKILL_CHANGE,
    payload: { name, value },
};
};
