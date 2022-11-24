import { legacy_createStore as createStore, combineReducers } from "redux";
import {
  interestedReducer,
  notInterestedReducer,
  mainReducer,
  favouriteReducer,
} from "./reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

//Combines the interestedReducer and notInterestedReducer into a single Reducer
const rootReducer = combineReducers({
  interested: interestedReducer,
  notInterested: notInterestedReducer,
  main: mainReducer,
  favourited: favouriteReducer,
});
//Creates a persisted reducer using the config and above combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
