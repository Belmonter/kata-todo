import { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

class TaskList extends Component {
	static defaultProps = {
		items: [],
		onDeleteItem: () => {},
		onComplete: () => {},
		onEdit: () => {},
		onSubmitEdit: () => {},
		onEditChange: () => {},
		tabAll: true,
		tabActive: false,
		tabCompleted: false,
		editItemInput: '',
	};

	static propTypes = {
		items: PropTypes.array,
		onDeleteItem: PropTypes.func,
		onComplete: PropTypes.func,
		onEdit: PropTypes.func,
		onSubmitEdit: PropTypes.func,
		onEditChange: PropTypes.func,
		tabAll: PropTypes.bool,
		tabActive: PropTypes.bool,
		tabCompleted: PropTypes.bool,
		editItemInput: PropTypes.string,
	};

	render() {
		const { items, onDeleteItem, onComplete, tabAll, tabActive, tabCompleted, onEdit, editItemInput, onSubmitEdit, onEditChange } = this.props;

		const itemRender = (items) => {
			const itemData = items.map(({ status, descr, create, edit, id, createDate }) => {
				return (
					<Task
						statusItem={status}
						descr={descr}
						create={create}
						edit={edit}
						key={id}
						id={id}
						createDate={createDate}
						onDeleteItem={onDeleteItem}
						onComplete={onComplete}
						onEdit={onEdit}
						editItemInput={editItemInput}
						onSubmitEdit={onSubmitEdit}
						onEditChange={onEditChange}
					/>
				);
			});
			return itemData;
		};

		return (
			<ul className="todo-list">
				{tabAll
					? itemRender(items)
					: tabActive
					? itemRender(items.filter((el) => el.status === true))
					: tabCompleted
					? itemRender(items.filter((el) => el.status === false))
					: itemRender(items)}
			</ul>
		);
	}
}

export default TaskList;
