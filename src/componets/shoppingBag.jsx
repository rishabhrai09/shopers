import React, { Component } from 'react'
import { connect } from "react-redux";
import {  Badge} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {  removeGrocery} from '../actions/action';

class ShoppingBag extends Component{
    
    dispalyShoppingBag(){
        if(this.props.shoppingBag.length>0){
            return(  <ul className="list-group">
            {
               this.props.shoppingBag.map((item)=><li className="list-group-item" key={item.id} onClick={()=>this.props.removeGrocery(item.id)}> <strong>{item.name}</strong>
                <Badge variant="primary"> &#x20B9;  {item.cost}</Badge> <Badge variant="secondary"> {item.weight} mg</Badge><Badge variant="info">{item.calories} kcal</Badge>
                </li>
         )
                }
       </ul>)

        }
        else{
         return(   <ul className="list-group text-danger">
         <li>No item is seleted Please select </li>
    </ul>)
        }
    }
     render(){
      
       
       
         return(
 <div className="col-md-4">
     <h2 className="text-center">Shopping Bag Items</h2>
   
{this.dispalyShoppingBag()}
 </div>
         )
     }
}


const mapStateToprops=state=>{
    
    return{
        shoppingBag:state.shoppingReducer 
    }
}


const mapDispatchToprops=dispatch=>{
   return bindActionCreators({removeGrocery},dispatch)
}
export default connect(mapStateToprops,mapDispatchToprops)(ShoppingBag)




