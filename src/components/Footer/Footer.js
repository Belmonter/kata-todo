import PropTypes from 'prop-types';
import { Component } from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';

class Footer extends Component {
	static defaultProps = {
		counter: 0,
		onTabClick: () => {},
		tabAll: false,
		tabActive: false,
		tabCompleted: false,
		onClear: () => {},
	};

	static propTypes = {
		counter: PropTypes.number,
		onTabClick: PropTypes.func,
		tabAll: PropTypes.bool,
		tabActive: PropTypes.bool,
		tabCompleted: PropTypes.bool,
		onClear: PropTypes.func,
	};

	render() {
		const { counter, onTabClick, tabAll, tabActive, tabCompleted, onClear } = this.props;

		return (
			<footer className="footer">
				<span className="todo-count">{counter} items left</span>
				<TasksFilter onTabClick={onTabClick} tabAll={tabAll} tabActive={tabActive} tabCompleted={tabCompleted} />
				<button className="clear-completed" onClick={onClear}>
					Clear completed
				</button>
			</footer>
		);
	}
}

export default Footer;
