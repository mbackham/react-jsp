import React,{Component,Fragment} from 'react'
class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputVal:'',
            list:[]
        }

    }
     changeVal=(e)=>{
        console.log(e.target.value)
        this.setState({
            inputVal:e.target.value
        })
    }
    render(){
        return(
           <Fragment>
            <div>
                <input value={this.state.inputVal} onChange={this.changeVal}/><button>增加选项</button>
            </div>
            <ul><li>头部</li><li>头部</li></ul>
        </Fragment>
        )

    }
}
export default Xiaojiejie