import { combineReducers } from 'redux';
import ui from './UIReducer';
import user from './user';
import boards from './boards';

const rootReducer = combineReducers({
  ui,
  user,
  boards,
});

export default rootReducer;
