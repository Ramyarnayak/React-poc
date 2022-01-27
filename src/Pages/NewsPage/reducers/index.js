import { combineReducers } from 'redux';
import news from './newsReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  news
});

export default rootReducer;