import './App.css';
import React from 'react';
import Button from './components/Button';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';

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
    ],
    isEdit : false,
    editData : {
      id: "",
      tittle: ""
    }
  }

  update = () => {
    const {id, tittle} = this.state.editData
    const newData = {id,tittle}
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos : newTodos,
      isEdit:false,
      editData: {
        id:"",
        tittle:""
      }
    })
  }

  setTittle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        tittle : e.target.value
      }
    })
  }

  openPopUp = (id, data) => {
    this.setState({
      isEdit:true,
      editData : {
        id,
        tittle:data
      }
    })
  }

  closePopUp = () => {
    this.setState({
      isEdit:false
    })
  }
  deleteTask = id => {
    this.setState({
      todos:this.state.todos.filter(item=>item.id != id)
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id : id+1,
      tittle:data
    }
    this.setState({
      todos:[...this.state.todos, newData]
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
            <TodoItem key={item.id} todo={item} hapus={this.deleteTask} buka={this.openPopUp}/>
          )}
        </div>
        <div className="input-form">
          <FormInput tambah={this.addTask}/>
        </div>
        <EditModal 
          edit={this.state.isEdit} 
          tutup={this.closePopUp} 
          change={this.setTittle} 
          data={this.state.editData}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
