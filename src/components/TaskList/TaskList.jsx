import React from 'react'
import Task from '../Task/Task'

function TaskList({ items }) {

  const itemsData = items.map((item) => {
    return <Task status={item.status} descr={item.descr} create={item.create} edit={item.edit} key={item.id}/>
  })



  return (
    <ul className="todo-list">
      {itemsData}
    </ul>
  )
}

export default TaskList