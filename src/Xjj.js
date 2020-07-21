import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'
import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        //订阅
        this.deleteItem = this.deleteItem.bind(this)

        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)

    }
    changeInputVal = (e) => {
        // console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(
            store.getState()
        )
    }
    clickBtn=()=>{
        const action=addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        console.log(index)
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputVal={this.changeInputVal}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
            />
        );
    }
}
export default TodoList;