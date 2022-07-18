
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewTaskForm extends Component {

  static defaultProps = {
    addItem: () => { },
    newItemInput: '',
    onNewTaskChange: () => { }
  }

  static propTypes = {
    addItem: PropTypes.func,
    newItemInput: PropTypes.string,
    onNewTaskChange: PropTypes.func
  }


  render() {

    const { addItem, newItemInput, onNewTaskChange } = this.props;

    return (
      <form onSubmit={addItem}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus
          value={newItemInput}
          onChange={onNewTaskChange}
        />
      </form>
    )
  }
}

export default NewTaskForm