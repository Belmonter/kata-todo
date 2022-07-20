import PropTypes from 'prop-types';
import { Component } from 'react';

import pause from '../../assets/img/pause.svg';
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

	state = {
		min: Number(this.props.min),
		sec: Number(this.props.sec),
	};

	componentWillUnmount() {
		this.props.onTaskUnmount(this.props.id, this.state.min, this.state.sec);
	}

	onStartTimer = () => {
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			this.setState(({ min, sec }) => {
				if (min === 0 && sec === 1) {
					clearInterval(this.timer);
				}
				if (sec === 0 && min > 0) {
					return {
						min: min - 1,
						sec: 60,
					};
				} else {
					return {
						sec: sec - 1,
					};
				}
			});
		}, 1000);
	};

	onPauseTimer = () => {
		clearInterval(this.timer);
	};

	render() {
		const {
			statusItem,
			descr,
			create,
			edit,
			id,
			onDeleteItem,
			onComplete,
			onEdit,
			onSubmitEdit,
			editItemInput,
			onEditChange,
			tabAll,
			tabActive,
			tabCompleted,
		} = this.props;

		const { min, sec } = this.state;

		let tabs = tabAll
			? { display: 'block' }
			: tabActive && statusItem
			? { display: 'block' }
			: tabCompleted && !statusItem
			? { display: 'block' }
			: { display: 'none' };

		return (
			<li className={edit ? 'editing' : !statusItem ? 'completed' : null} style={tabs} data-id={id}>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>
						<span className="title" onClick={() => onComplete(id)}>
							{descr}
						</span>
						<div className="description flex">
							<button className="play">
								<img src={play} alt="play" onClick={this.onStartTimer} />
							</button>
							<button className="pause">
								<img src={pause} alt="pause" onClick={this.onPauseTimer} />
							</button>
							{min}:{sec}
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
