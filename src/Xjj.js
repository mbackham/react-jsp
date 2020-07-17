import React, { Component, Fragment } from 'react'
import Test from './test'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ["劳务管理", "机械设备"]
        }
    }
    changeVal = () => {
        this.setState({
            inputVal: this.input.value
        })
    }
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)

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
                    <input id='koma' value={this.state.inputVal} onChange={this.changeVal}
                     ref={(input) => {this.input = input}} />
                     <button onClick={this.addList}>增加选项</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Test
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteMethod={this.deleteVal} />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Xiaojiejie