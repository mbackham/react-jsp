import React, { Component, Fragment } from 'react'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ["劳务管理", "机械设备"]
        }
    }
    changeVal = (e) => {
        console.log(e.target.value)
        this.setState({
            inputVal: e.target.value
        })
    }
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    }
    deleteVal = (e) => {
        let list = this.state.list//先声明变量
        list.splice(e, 1)//再操作变量 （不能直接操作this.state删减）
        this.setState({
            list: list
        }
        )
    }
    render() {
        return (
            <Fragment>

                <div>
                    <label htmlFor='koma'>增加项目：</label>

                    <input id='koma' value={this.state.inputVal} onChange={this.changeVal} /><button onClick={this.addList}>增加选项</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                key={index + item}
                                onClick={this.deleteVal.bind(this,index)}
                                dangerouslySetInnerHTML={{__html:item}} ></li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Xiaojiejie