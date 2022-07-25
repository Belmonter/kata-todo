import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';

import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import './index.css';

const App = () => {
	const [items, setitems] = React.useState({
		items: [],
		counter: 0,
	});
	const [tabs, setTabs] = React.useState({
		tabAll: true,
		tabActive: false,
		tabCompleted: false,
	});
	const [newItemInput, setNewItemInput] = React.useState('');
	const [editItemInput, setEditItemInput] = React.useState('');
	const [min, setMin] = React.useState('');
	const [sec, setSec] = React.useState('');

	let dateTimer;

	React.useEffect(() => {
		dateTimer = setInterval(() => updateTimeDistance(), 5000);
		return () => {
			clearInterval(dateTimer);
		};
	}, [items]);

	const onDeleteItem = (id) => {
		setitems((items) => {
			const { items: item } = items;
			const newArray = item.filter((item) => item.id !== id);
			return {
				items: newArray.filter((item) => item.id !== id),
				counter: newArray.filter((el) => el.status === true).length,
			};
		});
	};

	const onComplete = (id) => {
		setitems((items) => {
			const { items: item } = items;
			const newArray = [...item];
			const index = newArray.findIndex((el) => el.id === id);
			newArray[index] = { ...newArray[index], status: !newArray[index].status };
			return {
				items: newArray,
				counter: newArray.filter((el) => el.status === true).length,
			};
		});
	};

	const onClear = () => {
		setitems((items) => {
			return { ...items, items: items.items.filter((el) => el.status !== false) };
		});
	};

	const onNewTaskChange = (e) => {
		setNewItemInput(e.target.value);
	};

	const getTimeDistance = (createDate) => {
		let result = formatDistanceToNow(createDate, { includeSeconds: true });
		return result;
	};

	const updateTimeDistance = () => {
		if (items.items.length) {
			setitems((items) => {
				const { items: item } = items;
				let newArray = [...item];
				newArray.forEach((el) => {
					el.create = `created ${getTimeDistance(el.createDate)} ago`;
				});
				return { ...items, items: newArray };
			});
		}
	};

	const addNewItem = (e) => {
		e.preventDefault();
		const text = newItemInput;
		if (text) {
			setitems((items) => {
				const { items: item } = items;
				const newItem = {
					status: true,
					checkbox: false,
					descr: text,
					min: min,
					sec: sec,
					create: `created ${getTimeDistance(new Date())} ago`,
					edit: false,
					id: item.length + 1,
					createDate: new Date(),
				};
				const newData = [...item, newItem];
				return {
					items: newData,
					counter: newData.filter((el) => el.status === true).length,
				};
			});
			setNewItemInput('');
			setMin('');
			setSec('');
		}
	};

	const onTabClick = (e) => {
		const target = e.target;
		if (target.textContent === 'All') {
			setTabs((tabs) => {
				return {
					tabAll: !tabs.tabAll,
					tabActive: false,
					tabCompleted: false,
				};
			});
		} else if (target.textContent === 'Active') {
			setTabs((tabs) => {
				return {
					tabAll: false,
					tabActive: !tabs.tabActive,
					tabCompleted: false,
				};
			});
		} else if (target.textContent === 'Completed') {
			setTabs((tabs) => {
				return {
					tabAll: false,
					tabActive: false,
					tabCompleted: !tabs.tabCompleted,
				};
			});
		}
	};

	const onEdit = (id) => {
		setitems((items) => {
			const { items: item } = items;
			const newArray = [...item];
			const index = item.findIndex((el) => el.id === id);
			newArray[index] = { ...newArray[index], edit: !newArray[index].edit };
			return { ...items, items: newArray };
		});
	};

	const onEditChange = (e) => {
		setEditItemInput(e.target.value);
	};

	const onSubmitEdit = (e, id) => {
		e.preventDefault();
		setitems((items) => {
			const { items: item } = items;
			const newArray = [...item];
			const index = item.findIndex((el) => el.id === id);
			newArray[index] = { ...newArray[index], descr: editItemInput, edit: !newArray[index].edit };
			return { ...items, items: newArray };
		});
		setEditItemInput('');
	};

	const onMinuteChange = (e) => {
		setMin(e.target.value);
	};

	const onSecChange = (e) => {
		setSec(e.target.value);
	};

	const onTaskUnmount = (id, min, sec) => {
		setitems((items) => {
			const { items: item } = items;
			const newArray = [...item];
			const index = item.findIndex((el) => el.id === id);
			newArray[index] = { ...newArray[index], min: min, sec: sec };
			return { ...items, items: newArray };
		});
	};

	return (
		<div className="app">
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<NewTaskForm
						addItem={addNewItem}
						newItemInput={newItemInput}
						onNewTaskChange={onNewTaskChange}
						min={min}
						sec={sec}
						onMinuteChange={onMinuteChange}
						onSecChange={onSecChange}
					/>
				</header>
				<section className="main">
					<TaskList
						items={items.items}
						onDeleteItem={onDeleteItem}
						onComplete={onComplete}
						tabAll={tabs.tabAll}
						tabActive={tabs.tabActive}
						tabCompleted={tabs.tabCompleted}
						onEdit={onEdit}
						onSubmitEdit={onSubmitEdit}
						editItemInput={editItemInput}
						onEditChange={onEditChange}
						onTaskUnmount={onTaskUnmount}
					/>
					<Footer
						counter={items.counter}
						onTabClick={onTabClick}
						tabAll={tabs.tabAll}
						tabActive={tabs.tabActive}
						tabCompleted={tabs.tabCompleted}
						onClear={onClear}
					/>
				</section>
			</section>
		</div>
	);
};

export default App;
