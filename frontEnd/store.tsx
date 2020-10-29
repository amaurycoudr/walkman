import tokenReducer from "./slice/tokenSlice";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        token:tokenReducer,
    }
})