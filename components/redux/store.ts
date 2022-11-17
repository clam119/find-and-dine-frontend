import { legacy_createStore as createStore, combineReducers } from 'redux'
import { interestedReducer, notInterestedReducer } from './reducer'

export const rootReducer = combineReducers({interested: interestedReducer, notInterested: notInterestedReducer})
export default createStore(rootReducer);
