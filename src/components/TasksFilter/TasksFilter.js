import { Component } from 'react';
import Proptypes from 'prop-types';

class TasksFilter extends Component {
  static defaultProps = {
    onTabClick: () => {},
    tabAll: true,
    tabActive: false,
    tabCompleted: false,
  };

  static propTypes = {
    onTabClick: Proptypes.func,
    tabAll: Proptypes.bool,
    tabActive: Proptypes.bool,
    tabCompleted: Proptypes.bool,
  };

  render() {
    const { onTabClick, tabAll, tabActive, tabCompleted } = this.props;

    return (
      <ul className="filters">
        <li>
          <button className={tabAll ? 'selected' : null} onClick={onTabClick}>
            All
          </button>
        </li>
        <li>
          <button className={tabActive ? 'selected' : null} onClick={onTabClick}>
            Active
          </button>
        </li>
        <li>
          <button className={tabCompleted ? 'selected' : null} onClick={onTabClick}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
