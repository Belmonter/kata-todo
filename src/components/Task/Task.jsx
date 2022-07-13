import React from 'react'

function Task({ status, descr, create, edit, id, setitems, onDeleteItem }) {

  const [completeStatus, setcompleteStatus] = React.useState(null);

  const activeHandler = (e) => {
    e.target.closest('li').classList.toggle('completed')
  }



  return (
    <li className={status} data-id={id} >
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label onClick={(e) => setcompleteStatus(activeHandler(e))}>
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

export default Task