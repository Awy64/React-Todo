import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import "./components/Todo.css"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [],
      otherData: ""
    }
  }

  addNewTask = task => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: task, id: Date.now(), completed: false }
      ]
    })
  }

  toggleTodoCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }


  render() {
    return (
      <div className="wrapper">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList toggleTodoCompleted={this.toggleTodoCompleted} todos={this.state.todos} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
