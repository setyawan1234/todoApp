import './App.css';
import React from 'react';
import Button from './components/Button';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  state = {
    todos: 
    [
      {
        id: 1,
        tittle: "Ngoding"
      },
      {
        id: 2,
        tittle: "Ngoding Lagi"
      }
    ]
  }
  deleteTask = id => {
    this.setState({
      todos:this.state.todos.filter(item=>item.id != id)
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src="logo192.png" alt="logo" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map(item =>
            <TodoItem key={item.id} todo={item} hapus={this.deleteTask}/>
          )}
        </div>
        <div className="input-form">
          <FormInput />
        </div>
      </div>
    );
  }
}

export default App;
