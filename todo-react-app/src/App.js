import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {   // 매개변수 props 생성자 
    super(props);  // 매개변수 props 초기화
    this.state = {
      items : [
        {id: 0, title: "Todo 1 ", done: false},  // item에 item.id, item.title, item.done 매개변수 이름과 값을 할당
        {id: 1, titile: "Todo 2", done: false},
      ],
    };
  }
  render() {
    // javascript에서 제공하는 map 함수를 이용해 배열을 반복하여 <Todo/> Component를 여러 개 생성할 수 있다.
    var todoItems = this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id}/>
    ));

    // 생성된 Component JSX를 리턴
    return <div className='App'>{todoItems}</div>;
  }
}
export default App;
