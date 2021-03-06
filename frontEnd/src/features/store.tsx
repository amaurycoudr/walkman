import tokenReducer from "./token/redux/tokenSlice";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import tasksReducer from "./tasks/redux/tasksSlice";
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import thunk from "redux-thunk";
import logger from "redux-logger";


const tasksConfig = {
    key: 'tasks',
    storage: AsyncStorage,
    whitelist: ['tasksDict']
}
const reducers = combineReducers({
    token: tokenReducer,
    tasks: persistReducer(tasksConfig, tasksReducer),
})
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['tasks']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger]

});
export const persist = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store;
