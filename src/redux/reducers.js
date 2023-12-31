import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
