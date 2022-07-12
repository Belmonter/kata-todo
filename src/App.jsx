import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import './index.css';

const listItems = [
  { status: 'completed', descr: 'Completed task', create: 'created 17 seconds ago', edit: false, id: 1},
  { status: 'editing', descr: 'Editing task', create: 'created 5 minutes ago', edit: true, id: 2},
  { status: null, descr: 'Active task', create: 'created 5 minutes ago', edit: false, id: 3},
]

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm/>
        </header>
        <section className="main">
          <TaskList items={listItems}/>
          <Footer/>
        </section>
      </section>
    </div>
  );
}

export default App;
