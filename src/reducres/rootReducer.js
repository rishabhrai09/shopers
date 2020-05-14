import { combineReducers } from 'redux';

import grocery from "./grocery";
import {shoppingReducer} from './shoppingBag.reducer';
import {pocketMoney} from './pocketMoneyReducer'
const rootReducer= combineReducers({grocery,shoppingReducer,pocketMoney});
export default rootReducer;