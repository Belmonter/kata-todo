import submit from '../../assets/img/submit.svg';

const NewTaskForm = (props) => {
	const { addItem, newItemInput, onNewTaskChange, min, sec, onMinuteChange, onSecChange } = props;

	return (
		<form onSubmit={addItem} className="new-todo-form">
			<input className="new-todo" placeholder="Task" autoFocus value={newItemInput} onChange={onNewTaskChange} />
			<input type="number" className="new-todo-form__timer" value={min} onChange={onMinuteChange} placeholder="Min" />
			<input type="number" className="new-todo-form__timer" value={sec} onChange={onSecChange} placeholder="Sec" />
			<button type="submit" className="new-todo-form__timer">
				<img src={submit} alt="submit icon" />
			</button>
		</form>
	);
};

export default NewTaskForm;
