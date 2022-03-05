// Store/configureStore.js

import { createStore, combineReducers } from "redux";
import {userReducer} from "./reducers/userReducer";

export default createStore(
    combineReducers({ user : userReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //For redux devtool extension
);
