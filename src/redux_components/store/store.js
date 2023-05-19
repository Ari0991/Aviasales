import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import { reducer } from '../reducer/reducer.js';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
