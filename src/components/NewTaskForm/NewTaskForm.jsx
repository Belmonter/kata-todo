
import React, { Component } from 'react'

export class NewTaskForm extends Component {

  state = {
    inpValue: ''
  }

  onInpChange = (e) => {
    this.setState({
      inpValue: e.target.value
    })
  }

  render() {

    const { addItem } = this.props;
    const { inpValue } = this.state;

    return (
      <form onSubmit={addItem}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus
          value={inpValue}
          onChange={this.onInpChange}
        />
      </form>
    )
  }
}

export default NewTaskForm