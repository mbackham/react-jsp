import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

const defaultState = {
    inputValue: 'write something',
    list: []
}
export default (state = defaultState, action) => {
    //reducer 里只能接收state不能改变state
    if (action.type === CHANGE_INPUT) {
        // let newState = JSON.parse(JSON.stringify(state))
        let newState = state
        newState.inputValue = action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type===GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list=action.data.tags
        return newState
    }
     return state
}