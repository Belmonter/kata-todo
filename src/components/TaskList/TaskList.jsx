import React, { Component } from 'react'
import Task from '../Task/Task'

export class TaskList extends Component {
  render() {

    const { items, onDeleteItem, onComplete, tabAll, tabActive, tabCompleted } = this.props

    const itemRender = (items) => {
      const itemData = items.map(({ status, descr, create, edit, id, }) => {
        return <Task statusItem={status} descr={descr} create={create} edit={edit} key={id} id={id} onDeleteItem={onDeleteItem} onComplete={onComplete} />
      })
      return itemData
    }


    return (
      <ul className="todo-list">
        {tabAll ? itemRender(items) : tabActive ? itemRender(items.filter(el => el.status === true)) : tabCompleted ? itemRender(items.filter(el => el.status === false)) : itemRender(items)}
      </ul>
    )
  }
}

export default TaskList