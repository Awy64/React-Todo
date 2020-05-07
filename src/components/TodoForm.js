import React from "react";
import "./Todo.css"


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }


  //updates state with each keystroke
  handleChange = e => {
    e.preventDefault()
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewTask(this.state.newTodo)
    this.setState({
      newTodo: ""
    })

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todo" value={this.state.newTodo} onChange={this.handleChange} />
        <button>Add Todo</button>
      </form>
    )
  }

}

export default TodoForm;