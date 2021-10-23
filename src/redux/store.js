import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
//to log state and actin in console
import logger from "redux-logger";
//for Redux div tools
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

//using persist to cache data, same as using localStorage
export const persistor = persistStore(store);

// export default { store, persistor }
