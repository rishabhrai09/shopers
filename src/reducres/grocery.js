import {  ADD_GROCERY,REMOVE_GROCERY} from "../actions/action"; 
import data from '../data/data.json';
import {addItem} from './helper.functions'
const INTIAL_STATE={
    groceryItem:data
}

 export const grocery=(state=INTIAL_STATE.groceryItem,action)=>{
    switch(action.type){
        case ADD_GROCERY:
            
            let grocery=state.filter(item=> item.id!== action.id )
            return grocery;

            case REMOVE_GROCERY:
             let gro=[...state,addItem(action.id)]
                return gro;
                
            default:
            return state;
    }

}



export default grocery