import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item };  // 매개변수 item의 변수/값을 item에 대입
    }
    render() {
        return (
            <div className='Todo'>
                <input type="checkbox" id={this.state.item.id}  // item.id의 값으로 rendering(JPX)
                    name={this.state.item.id} checked={this.state.item.done}  // item.done의 값으로 rendering
                />
                <label for={this.state.item.id}>{this.state.item.title}</label>
            </div>
        );
    }
}
export default Todo;
