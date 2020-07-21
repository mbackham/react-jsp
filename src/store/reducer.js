import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue: 'write something',
    list: ['早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review']
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
     return state
}