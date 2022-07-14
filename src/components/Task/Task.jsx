import React, { Component } from 'react'

export class Task extends Component {

  state = {
    status: null
  }

  // activeHandler = e => e.target.closest('li').classList.toggle('completed');


  render() {
    const { descr, create, edit, id, onDeleteItem } = this.props;
    const {status} = this.state;

    return (
      <li className={status} data-id={id} >
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label onClick={(e) => this.setState(({status}) => {
            return {
              status: status ? null : 'completed'
            }
          })}>
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