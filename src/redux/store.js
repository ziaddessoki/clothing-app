import { createStore, applyMiddleware } from "redux";
//to log state and actin in console
import logger from "redux-logger";
//for Redux div tools
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer'

const middlewares = [logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store