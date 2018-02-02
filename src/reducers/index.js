import { combineReducers } from 'redux';
import ui from './UIReducer';

const rootReducer = combineReducers({
  ui,
});

export default rootReducer;
