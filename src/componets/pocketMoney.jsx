import React, { Component } from 'react'
import {connect} from 'react-redux';

class PocketMoney extends Component{

    render(){
        console.log(this.props.pocketMoney)
        const {pocketMoney} =this.props
        return(
            <div className="container">
           <h1 > You money <span className="text-success"> {pocketMoney}</span> in pocket</h1>
            </div>
        )
    }
}
const mapStateToprops=(state )=>({
    pocketMoney:state.pocketMoney
})
export default connect(mapStateToprops,null)(PocketMoney)