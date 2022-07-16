import React, { Component } from 'react'

export class TasksFilter extends Component {
  render() {

    const { onTabClick, tabAll, tabActive, tabCompleted } = this.props;

    return (
      <ul className="filters">
        <li>
          <button className={tabAll ? 'selected' : null} onClick={onTabClick}>All</button>
        </li>
        <li>
          <button className={tabActive ? 'selected' : null} onClick={onTabClick}>Active</button>
        </li>
        <li>
          <button className={tabCompleted ? 'selected' : null} onClick={onTabClick}>Completed</button>
        </li>
      </ul>
    )
  }
}

export default TasksFilter