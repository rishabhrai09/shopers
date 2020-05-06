import { combineReducers } from 'redux';

import grocery from "./grocery";
import {shoppingReducer} from './shoppingBag.reducer'
const rootReducer= combineReducers({grocery,shoppingReducer});
export default rootReducer;