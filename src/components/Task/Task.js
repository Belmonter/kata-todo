import React from 'react';

import pause from '../../assets/img/pause.svg';
import play from '../../assets/img/play.svg';

const Task = (props) => {
	// const [todoTimer, setTodoTimer] = React.useState({
	// 	min: props.min,
	// 	sec: props.sec,
	// 	active: false,
	// });
	const [todoMin, setTodoMin] = React.useState(props.min ? props.min : 0);
	const [todoSec, setTodoSec] = React.useState(props.sec ? props.sec : 0);
	const [todoActive, setTodoActive] = React.useState(false);
	const [check, setCheck] = React.useState(props.checkbox);

	React.useEffect(() => {
		let timer = null;

		if (todoActive) {
			timer = setInterval(() => {
				if (Number(todoMin) === 0 && Number(todoSec) === 1) {
					setTodoMin(0);
					setTodoSec(1);
					setTodoActive(false);
					clearInterval(timer);
				}
				if (Number(todoSec) === 0 && Number(todoMin) > 0) {
					setTodoMin((todoMin) => todoMin - 1);
					setTodoSec(60);
				} else {
					setTodoSec((todoSec) => todoSec - 1);
				}
			}, 1000);
		}

		if (!todoActive) {
			clearInterval(timer);
		}

		return () => {
			clearInterval(timer);
			props.onTaskUnmount(props.id, todoMin, todoSec);
		};
	}, [todoActive, todoMin, todoSec]);

	const onStartTimer = () => {
		if (todoMin >= 0 && todoSec > 0) setTodoActive(true);
	};

	const onPauseTimer = () => {
		setTodoActive(false);
	};

	const onCheckboxChange = () => {
		setCheck((check) => !check);
	};

	const {
		statusItem,
		descr,
		// checkbox,
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
	} = props;

	let tabs = tabAll
		? { display: 'block' }
		: tabActive && check
		? { display: 'block' }
		: tabCompleted && !statusItem
		? { display: 'block' }
		: { display: 'none' };

	return (
		<li className={edit ? 'editing' : !statusItem ? 'completed' : null} style={tabs} data-id={id}>
			<div className="view">
				<input className="toggle" type="checkbox" checked={check} onChange={onCheckboxChange} />
				<label>
					<span className="title" onClick={() => onComplete(id)}>
						{descr}
					</span>
					<div className="description flex">
						<button className="play">
							<img src={play} alt="play" onClick={onStartTimer} />
						</button>
						<button className="pause">
							<img src={pause} alt="pause" onClick={onPauseTimer} />
						</button>
						{todoMin}:{todoSec}
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
};

export default Task;
