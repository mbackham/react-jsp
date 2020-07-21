import React from 'react';
import { Input, Button, List } from 'antd'
const TodoListUI=(props)=>{
    return(
<div style={{ margin: '10px' }}>
    <div>
        <Input placeholder={props.inputValue} style={{ width: '250px', marginRight: '10px' }}
            onChange={props.changeInputVal} />
        <Button onClick={props.clickBtn} type="primary">增加</Button>
    </div>
    <div style={{ margin: '10px', width: '300px' }}>
        <List
            bordered
            dataSource={props.list}
            // renderItem={(item,index) => (<List.Item onClick={deleteItem(index)}>{item}</List.Item>)}
            renderItem={(item,index)=>(
                <List.Item onClick={()=>{props.deleteItem(index)}}>{item}
                </List.Item>)}



        />
    </div>
</div>
    )

}
// class TodoListUi extends Component {

//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input placeholder={props.inputValue} style={{ width: '250px', marginRight: '10px' }}
//                         onChange={props.changeInputVal} />
//                     <Button onClick={props.clickBtn} type="primary">增加</Button>
//                 </div>
//                 <div style={{ margin: '10px', width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={props.list}
//                         // renderItem={(item,index) => (<List.Item onClick={deleteItem(index)}>{item}</List.Item>)}
//                         renderItem={(item,index)=>(
//                             <List.Item onClick={()=>{props.deleteItem(index)}}>{item}
//                             </List.Item>)}



//                     />
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUI;