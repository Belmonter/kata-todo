import React from 'react';

import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import './index.css';


function App() {

  const listItems = [
    { status: 'completed', descr: 'Completed task', create: 'created 17 seconds ago', edit: false, id: 1 },
    { status: 'editing', descr: 'Editing task', create: 'created 5 minutes ago', edit: true, id: 2 },
    { status: null, descr: 'Active task', create: 'created 5 minutes ago', edit: false, id: 3 },
  ]

  const [items, setitems] = React.useState(listItems)

  const onDeleteItem = (e) => {
    const id = e.target.closest('li').dataset.id;

    setitems(items => items.filter(item => item.id != id))
  }



  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList items={items} setitems={setitems} onDeleteItem={onDeleteItem}/>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default App;
