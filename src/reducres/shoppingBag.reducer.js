import {  ADD_GROCERY,REMOVE_GROCERY} from "../actions/action"; 
import {addItem} from './helper.functions'
const INTIAL_STATE={
    bag:[]
}

 export const shoppingReducer=(state=INTIAL_STATE.bag,action)=>{
    switch(action.type){
        case ADD_GROCERY:
            let shoppingBag=[...state,addItem(action.id)]
            return shoppingBag;
            case REMOVE_GROCERY:
                let bag=state.filter(item=>item.id !==action.id)
                return bag;
            default:
            return state
    }

}





export default shoppingReducer