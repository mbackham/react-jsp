import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'


class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        //订阅
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)

    }
    changeInputVal = (e) => {
        // console.log(e.target.value)
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(
            store.getState()
        )
    }
    clickBtn=()=>{
        const action={
            type:'addItem'
        }
        store.dispatch(action)
    }
    deleteItem=(index)=>{
        const action={
            type:'deleteItem',index
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputVal} />
                    <Button onClick={this.clickBtn} type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={[this.state.list]}
                        renderItem={(item,index) => (<List.Item onClick={this.deleteItem(index)}>{item}</List.Item>)}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;