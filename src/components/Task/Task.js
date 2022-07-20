import { Component } from 'react';
import PropTypes from 'prop-types';

import pause from '../../assets/img/pause.svg'
import play from '../../assets/img/play.svg';

class Task extends Component {
	static defaultProps = {
		statusItem: null,
		descr: 'default Text',
		create: '1 sec ago',
		edit: false,
		id: 0,
		editItemInput: '',
		onDeleteItem: () => {},
		onComplete: () => {},
		onEdit: () => {},
		onEditChange: () => {},
		onSubmitEdit: () => {},
	};

	static propTypes = {
		statusItem: PropTypes.bool,
		descr: PropTypes.string,
		create: PropTypes.string,
		edit: PropTypes.bool,
		id: PropTypes.number,
		onDeleteItem: PropTypes.func,
		onComplete: PropTypes.func,
		onEdit: PropTypes.func,
		onEditChange: PropTypes.func,
		onSubmitEdit: PropTypes.func,
		editItemInput: PropTypes.string,
	};

	render() {
		const { statusItem, descr, create, edit, id, onDeleteItem, onComplete, onEdit, onSubmitEdit, editItemInput, onEditChange } = this.props;

		return (
			<li className={edit ? 'editing' : !statusItem ? 'completed' : null} data-id={id}>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label onClick={() => onComplete(id)}>
						<span className="title">{descr}</span>
						<div className="description flex">
							<button className="play">
								<img src={play} alt="play" />
							</button>
							<button className="pause">
								<img src={pause} alt="pause" />
							</button>
							12:25
						</div>
						<span className="description">{create}</span>
					</label>
					<button className="icon icon-edit" onClick={() => onEdit(id)}></button>
					<button className="icon icon-destroy" onClick={() => onDeleteItem(id)}></button>
				</div>
				{edit && (
					<form onSubmit={(e) => onSubmitEdit(e, id)}>
						<input type="text" className="edit" placeholder="Edit your task" autoFocus value={editItemInput} onChange={onEditChange} />
					</form>
				)}
			</li>
		);
	}
}

export default Task;
