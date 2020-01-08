import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  handleUpdate(evt) {
    evt.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id)
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            onClick={this.handleToggle}
            className={this.props.completed ? 'completed' : ''}
          >
            {this.props.task}
          </li>
        </div>
      )
    }
    return result
  }
}

export default Todo