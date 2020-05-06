import React, { Component } from 'react'
import { connect } from "react-redux";
import {  Badge} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {  addgroceryById} from '../actions/action';

class Grocery extends Component{
     render(){
         console.log(this.props)
         const {grocery ,addgroceryById}=this.props
         return(
 <div className="col-md-4">
     <h2 className="text-center">Grocery items </h2>
     <ul className="list-group">
         {
         grocery.map((item)=><li className="list-group-item" key={item.id} onClick={()=>addgroceryById(item.id)}> <strong>{item.name}</strong>
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
    console.log(state)
    return{
        grocery:state.grocery
    }
}


const mapDispatchToprops=dispatch=>{
   return bindActionCreators({addgroceryById},dispatch)
}
export default connect(mapStateToprops,mapDispatchToprops)(Grocery)


