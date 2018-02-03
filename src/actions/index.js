import { TOGGLE_SIDEBAR, FETCH_USER, GET_BOARDS, SKILL_CHANGE, FETCH_USER_LIST, ADD_BOOKMARK, ADD_WANT, ADD_SKILL } from './types';
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
  const url = 'http://localhost:3000/boards';
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


export const addBookmark = (boardId, categoryName, bookmark) => {
  return {
    type: ADD_BOOKMARK,
    payload: {
      boardId,
      categoryName,
      bookmark,
    },
  };
};

export const changeSkillLevel = (name, value, cb) => {
  console.log(value);
  return{
    type: SKILL_CHANGE,
    payload: { name, value, cb },
  };
};

export const addWant = (skill, cb) => {
  return {
    type: ADD_WANT,
    payload: { skill, cb },
  };
};

export const addSkill = (skill, cb) => {
  return {
    type: ADD_SKILL,
    payload: { skill, cb },
  };
};

export const fetchUserList = () => {
  const url = `http://localhost:3000/users`;
  const request = axios.get(url);


  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_USER_LIST,
        payload: data,
      });
    });
  };
}
