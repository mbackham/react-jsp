import React, { Component } from 'react';
import { Input, Button, List } from 'antd'

class TodoListUi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input placeholder={this.props.inputValue} style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.props.changeInputVal} />
                    <Button onClick={this.props.clickBtn} type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        // renderItem={(item,index) => (<List.Item onClick={this.deleteItem(index)}>{item}</List.Item>)}
                        renderItem={(item,index)=>(
                            <List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}
                            </List.Item>)}
                        // renderItem={(item, index) => (
                        // <List.Item onClick={() => { this.props.deleteItem(index) }}>
                        //     {item}
                        // </List.Item>)}


                    />
                </div>
            </div>
        );
    }
}

export default TodoListUi;