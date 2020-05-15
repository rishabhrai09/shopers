import {ADD_POCKET_MONEY,REMOVE_POCKET_MONEY} from '../actions/action';
import {addItem} from './helper.functions'

export const pocketMoney=(state=50,action)=>{
    switch(action.type){
        case ADD_POCKET_MONEY:
            
           let additem =addItem(action.id)

           let PocketMoney=state+additem.cost
           return PocketMoney
            
           
          
           case REMOVE_POCKET_MONEY:
            
            let    item =addItem(action.id)
               let  pocketMoney=state-item.cost
               return pocketMoney
               default :
               
               return state;
    }
}