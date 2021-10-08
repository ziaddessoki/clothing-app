import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//to access localStorage(part of persist config)
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  //basically the reduce that wanted to be save to localStorage via persist
  whitelist: ["cart"],
};

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
