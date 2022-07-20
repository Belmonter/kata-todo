import { Component } from 'react';
import PropTypes from 'prop-types';

import submit from  '../../assets/img/submit.svg'

class NewTaskForm extends Component {
	static defaultProps = {
		addItem: () => {},
		newItemInput: '',
		onNewTaskChange: () => {},
	};

	static propTypes = {
		addItem: PropTypes.func,
		newItemInput: PropTypes.string,
		onNewTaskChange: PropTypes.func,
	};

	render() {
		const { addItem, newItemInput, onNewTaskChange } = this.props;

		return (
			<form onSubmit={addItem} className="new-todo-form">
				<input className="new-todo" placeholder="Task" autoFocus value={newItemInput} onChange={onNewTaskChange} />
				<input className="new-todo-form__timer" placeholder="Min" autoFocus />
				<input className="new-todo-form__timer" placeholder="Sec" autoFocus />
				<button type="submit" className="new-todo-form__timer">
					<img src={submit} alt="submit icon" />
				</button>
			</form>
		);
	}
}

export default NewTaskForm;
