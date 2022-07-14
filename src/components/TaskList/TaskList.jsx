import React, { Component } from 'react'
import Task from '../Task/Task'

export class TaskList extends Component {
  render() {

    const { items, onDeleteItem } = this.props

    const itemsData = items.map((item) => {
      return <Task status={item.status} descr={item.descr} create={item.create} edit={item.edit} key={item.id} id={item.id} onDeleteItem={onDeleteItem} />
    })

    return (
      <ul className="todo-list">
        {itemsData}
      </ul>
    )
  }
}

export default TaskList