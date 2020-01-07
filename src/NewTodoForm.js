import React, { Component } from 'react'

export class NewTodoForm extends Component {

  render() {
    return (
      <div>
        <form htmlFor="task">
          <input type="text" placeholder="New Todo" id="task" />
        </form>
      </div>
    )
  }
}

export default NewTodoForm
