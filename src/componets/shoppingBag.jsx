import React, { Component } from 'react'
import { connect } from "react-redux";
import {  Badge} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {  removeGrocery} from '../actions/action';

class ShoppingBag extends Component{
     render(){
         console.log("shoppingBagProps",this.props)
         const {shoppingBag,removeGrocery} =this.props
         return(
 <div className="col-md-4">
     <h2 className="text-center">Shopping Bag Items</h2>
     <ul className="list-group">
     {
         shoppingBag.map((item)=><li className="list-group-item" key={item.id} onClick={()=>removeGrocery(item.id)}> <strong>{item.name}</strong>
         <Badge variant="primary"> &#x20B9;  {item.cost}</Badge> <Badge variant="secondary"> {item.weight} mg</Badge><Badge variant="info">{item.calories} kcal</Badge>
         </li>
  )
         }
</ul>

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




