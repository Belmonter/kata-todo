import Task from '../Task/Task';

const TaskList = (props) => {
	const { items, onDeleteItem, onComplete, tabAll, tabActive, tabCompleted, onEdit, editItemInput, onSubmitEdit, onEditChange, onTaskUnmount } =
		props;

	const itemRender = (items) => {
		const itemData = items.map(({ status, descr, create, edit, id, createDate, min, sec, checkbox }) => {
			return (
				<Task
					statusItem={status}
					descr={descr}
					checkbox={checkbox}
					min={min}
					sec={sec}
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
					onTaskUnmount={onTaskUnmount}
					tabAll={tabAll}
					tabActive={tabActive}
					tabCompleted={tabCompleted}
				/>
			);
		});
		return itemData;
	};

	return <ul className="todo-list">{itemRender(items)}</ul>;
};

export default TaskList;
