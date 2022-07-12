import React from 'react'

function Task({ status, descr, create, edit }) {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{descr}</span>
          <span className="created">{create}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {edit ? <input type="text" className="edit" value="Editing task" /> : null}
    </li>
  )
}

export default Task