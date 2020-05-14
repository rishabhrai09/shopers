import {ADD_POCKET_MONEY,REMOVE_POCKET_MONEY} from '../actions/action';
 
export const pocketMoney=(state=50,action)=>{
    switch(action.type){
        case ADD_POCKET_MONEY:
           console.log("pocket money added");
           return state;
           case REMOVE_POCKET_MONEY:
               console.log("pocket money remove");
               return state
               default :
               return state;
    }
}