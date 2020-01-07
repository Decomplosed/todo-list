import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <ul></ul>
      </div>
    )
  }
}

export default TodoList