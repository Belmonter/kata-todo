import { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import './index.css';

class App extends Component {
  state = {
    items: [],
    counter: 0,
    tabAll: true,
    tabActive: false,
    tabCompleted: false,
    newItemInput: '',
    editItemInput: '',
  };

  componentDidMount() {
    this.dateTimer = setInterval(() => this.updateTimeDistance(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.dateTimer);
  }

  onDeleteItem = (id) => {
    this.setState(({ items }) => {
      return {
        items: items.filter((item) => item.id !== id),
        counter: items.filter((el) => el.status === true).length,
      };
    });
  };

  onComplete = (id) => {
    this.setState(({ items }) => {
      const newArray = [...items];
      const index = newArray.findIndex((el) => el.id === id);
      newArray[index] = { ...newArray[index], status: !newArray[index].status };
      return {
        items: newArray,
        counter: newArray.filter((el) => el.status === true).length,
      };
    });
  };

  onClear = () => {
    this.setState(({ items }) => {
      return {
        items: items.filter((el) => el.status !== false),
      };
    });
  };

  onNewTaskChange = (e) => {
    this.setState({
      newItemInput: e.target.value,
    });
  };

  getTimeDistance = (createDate) => {
    let result = formatDistanceToNow(createDate, { includeSeconds: true });
    return result;
  };

  updateTimeDistance = () => {
    this.setState(({ items }) => {
      if (items.length) {
        let newArray = [...items];
        newArray.forEach((el) => {
          el.create = `created ${this.getTimeDistance(el.createDate)} ago`;
        });
        return {
          items: newArray,
        };
      }
    });
  };

  addNewItem = (e) => {
    e.preventDefault();
    const text = this.state.newItemInput;
    if (text) {
      this.setState(({ items }) => {
        const newItem = {
          status: true,
          descr: text,
          create: `created ${this.getTimeDistance(new Date())} ago`,
          edit: false,
          id: items.length + 1,
          createDate: new Date(),
        };
        const newData = [...items, newItem];
        return {
          items: newData,
          counter: newData.filter((el) => el.status === true).length,
          newItemInput: '',
        };
      });
    }
  };

  onTabClick = (e) => {
    const target = e.target;
    if (target.textContent === 'All') {
      this.setState(({ tabAll }) => {
        return {
          tabAll: !tabAll,
          tabActive: false,
          tabCompleted: false,
        };
      });
    } else if (target.textContent === 'Active') {
      this.setState(({ tabActive }) => {
        return {
          tabAll: false,
          tabActive: !tabActive,
          tabCompleted: false,
        };
      });
    } else if (target.textContent === 'Completed') {
      this.setState(({ tabCompleted }) => {
        return {
          tabAll: false,
          tabActive: false,
          tabCompleted: !tabCompleted,
        };
      });
    }
  };

  onEdit = (id) => {
    this.setState(({ items }) => {
      const newArray = [...items];
      const index = items.findIndex((el) => el.id === id);
      newArray[index] = { ...newArray[index], edit: !newArray[index].edit };
      return {
        items: newArray,
      };
    });
  };

  onEditChange = (e) => {
    this.setState({
      editItemInput: e.target.value,
    });
  };

  onSubmitEdit = (e, id) => {
    e.preventDefault();
    this.setState(({ items, editItemInput }) => {
      const newArray = [...items];
      const index = items.findIndex((el) => el.id === id);
      newArray[index] = { ...newArray[index], descr: editItemInput, edit: !newArray[index].edit };
      return {
        items: newArray,
        editItemInput: '',
      };
    });
  };

  render() {
    const { items, counter, tabAll, tabActive, tabCompleted, newItemInput, editItemInput } = this.state;

    return (
      <div className="app">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm addItem={this.addNewItem} newItemInput={newItemInput} onNewTaskChange={this.onNewTaskChange} />
          </header>
          <section className="main">
            <TaskList
              items={items}
              onDeleteItem={this.onDeleteItem}
              onComplete={this.onComplete}
              tabAll={tabAll}
              tabActive={tabActive}
              tabCompleted={tabCompleted}
              onEdit={this.onEdit}
              onSubmitEdit={this.onSubmitEdit}
              editItemInput={editItemInput}
              onEditChange={this.onEditChange}
            />
            <Footer counter={counter} onTabClick={this.onTabClick} tabAll={tabAll} tabActive={tabActive} tabCompleted={tabCompleted} onClear={this.onClear} />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
