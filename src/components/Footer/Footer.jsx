
import React, { Component } from 'react'
import TasksFilter from '../TasksFilter/TasksFilter'


export class Footer extends Component {
  render() {

    const { counter, onTabClick, tabAll, tabActive, tabCompleted, onClear } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{counter} items left</span>
        <TasksFilter onTabClick={onTabClick} tabAll={tabAll} tabActive={tabActive} tabCompleted={tabCompleted} />
        <button className="clear-completed" onClick={onClear}>Clear completed</button>
      </footer>
    )
  }
}

export default Footer