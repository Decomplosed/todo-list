import React, { Component } from 'react'

export class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: "" }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form htmlFor="task">
          <input
            type="text"
            placeholder="New Todo"
            id="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default NewTodoForm
