const TasksFilter = (props) => {
	const { onTabClick, tabAll, tabActive, tabCompleted } = props;

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
};

export default TasksFilter;
