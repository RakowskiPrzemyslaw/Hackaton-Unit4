import { combineReducers } from 'redux';
import ui from './UIReducer';
import user from './user';
import boards from './boards';
import userList from './user_list';

const rootReducer = combineReducers({
  ui,
  user,
  boards,
  userList,
});

export default rootReducer;
