import React, { Component } from 'react'

export class Task extends Component {

  state = {
    status: null
  }


  render() {
    const { statusItem, descr, create, edit, id, onDeleteItem, onComplete} = this.props;

    return (
      <li className={!statusItem ? 'completed' : null} data-id={id} >
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={() => onComplete(id)}>
            <span className="description">{descr}</span>
            <span className="created">{create}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleteItem}></button>
        </div>
        {edit ? <input type="text" className="edit" value="Editing task" /> : null}
      </li>
    )
  }
}

export default Task