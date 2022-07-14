
import React, { Component } from 'react'

export class NewTaskForm extends Component {
  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    )
  }
}

export default NewTaskForm