import React, { Component } from 'react'

export class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: "" }
  }

  render() {
    return (
      <div>
        <form htmlFor="task">
          <input type="text" placeholder="New Todo" id="task" value={this.state.task} />
        </form>
      </div>
    )
  }
}

export default NewTodoForm
