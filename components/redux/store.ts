import { legacy_createStore as createStore, combineReducers } from 'redux'
import { interestedReducer, notInterestedReducer } from './reducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

//Combines the interestedReducer and notInterestedReducer into a single Reducer
const rootReducer = combineReducers({interested: interestedReducer, notInterested: notInterestedReducer})
//Creates a persisted reducer using the config and above combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store =  createStore(persistedReducer);
export const persistor = persistStore(store)