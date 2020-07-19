import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
          }
    }
    toToggle=()=>{
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
    render() { 
        return (
            <div>
                <div className={this.state.isShow?'show':'hide'}>boss顺悟空</div>
                <div><button onClick={this.toToggle}>召唤Boss</button></div>
            </div>
          );
    }
}
 
export default Boss;