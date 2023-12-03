import { combineReducers } from '@reduxjs/toolkit';

import searchReducer from './slice/search';
const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
