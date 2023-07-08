import './App.css';
import Button from './components/Button';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src="logo192.png" alt="logo"/>
        <h3>Task List</h3>
      </div>
      <div className="list">
        <TodoItem/>
      </div>
      <div className="input-form">
        <FormInput/>
      </div>
    </div>
  );
}

export default App;
