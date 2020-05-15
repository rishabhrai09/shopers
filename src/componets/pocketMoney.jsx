import React, { Component } from 'react'
import {connect} from 'react-redux';

class PocketMoney extends Component{
    pocketmoney(){
        if(this.props.pocketMoney>=0){
            return(
                <h1 > You money <span className="text-success"> {this.props.pocketMoney}</span> in pocket</h1>)        }

        else{
            
           return (
            <h1 className="text-danger"  > You dont't have money in pocket </h1>)
            
        }
    }



    render(){
        console.log(this.props.pocketMoney)
        
        return(
            <div className="container">
           {this.pocketmoney()}
            </div>
        )
    }
}
const mapStateToprops=(state )=>({
    pocketMoney:state.pocketMoney
})
export default connect(mapStateToprops,null)(PocketMoney)