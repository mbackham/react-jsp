import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
const conposeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = conposeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer,enhancer) // 创建数据存储仓库

export default store