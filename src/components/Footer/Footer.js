import TasksFilter from '../TasksFilter/TasksFilter';

const Footer = (props) => {
	const { counter, onTabClick, tabAll, tabActive, tabCompleted, onClear } = props;

	return (
		<footer className="footer">
			<span className="todo-count">{counter} items left</span>
			<TasksFilter onTabClick={onTabClick} tabAll={tabAll} tabActive={tabActive} tabCompleted={tabCompleted} />
			<button className="clear-completed" onClick={onClear}>
				Clear completed
			</button>
		</footer>
	);
};

export default Footer;
