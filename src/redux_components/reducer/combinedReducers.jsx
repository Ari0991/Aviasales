import { combineReducers } from 'redux';

import { listReducer, sortReducer } from './reducers.jsx';

export const reducer = combineReducers({ listReducer, sortReducer });
