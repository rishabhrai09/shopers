import React, { Component } from 'react'
import {connect} from 'react-redux'

class Statas extends Component{
    
    cost(){
        let totalCost=0
          this.props.shoppingBag.forEach(item => totalCost+=item.cost )
            return totalCost
    }

    weight(){
        let totalWeight=0
          this.props.shoppingBag.forEach(item => totalWeight+=item.weight )
            return totalWeight

    }

    calories(){
        let totalCalories=0
          this.props.shoppingBag.forEach(item => totalCalories+=item.calories )
            return totalCalories

    }

     render(){
       

         return(
 <div className="col-md-4">
     <h2 className="text-center">Statas items</h2>
     <ul className="list-group">
         <li className="list-group-item">Cost {this.cost()}</li>
  <li className="list-group-item">Calories {this.calories()}</li>
         <li className="list-group-item">weight {this.weight()}</li>
  
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



export default connect(mapStateToprops,null)(Statas)


