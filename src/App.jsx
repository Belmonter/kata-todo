import React, { Component } from 'react'
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import './index.css';


const listItems = [
  { status: true, descr: 'Completed task', create: 'created 17 seconds ago', edit: false, id: 1 },
  { status: true, descr: 'Editing task', create: 'created 5 minutes ago', edit: true, id: 2 },
  { status: true, descr: 'Active task', create: 'created 5 minutes ago', edit: false, id: 3 },
]

export class App extends Component {

  state = {
    items: listItems,
    counter: listItems.length,
    tabAll: true,
    tabActive: false,
    tabCompleted: false
  }

  onDeleteItem = (e) => {
    const id = e.target.closest('li').dataset.id;

    this.setState(({ items }) => {
      const newArray = items.filter(item => item.id != id);
      return {
        items: newArray,
        counter: newArray.filter(el => el.status === true).length,
      }
    })
  }

  onComplete = (id) => {
    this.setState(({ items }) => {
      const newArray = [...items];
      const index = newArray.findIndex((el) => el.id === id)
      newArray[index] = { ...newArray[index], status: !newArray[index].status }
      return {
        items: newArray,
        counter: newArray.filter(el => el.status === true).length,
      }
    })
  }

  onClear = () => {
    this.setState(({items}) => {
      return {
        items: items.filter(el => el.status !== false)
      }
    })
  }

  addNewItem = (e) => {
    e.preventDefault();
    const text = e.target.querySelector('input').value;
    if (text) {
      this.setState(({ items }) => {
        const newItem = { status: true, descr: text, create: 'created 17 seconds ago', edit: false, id: items.length + 1 }
        const newData = [
          ...items,
          newItem
        ];
        return {
          items: newData,
          counter: newData.filter(el => el.status === true).length,
        }
      })
    }
  }

  onTabClick = (e) => {
    const target = e.target;
    if (target.textContent === 'All') {
      this.setState(({tabAll}) => {
        return {
          tabAll: !tabAll,
          tabActive: false,
          tabCompleted: false
        }
      })
    } else if (target.textContent === 'Active') {
      this.setState(({ tabActive }) => {
        return {
          tabAll: false,
          tabActive: !tabActive,
          tabCompleted: false
        }
      })
    } else if (target.textContent === 'Completed') {
      this.setState(({ tabCompleted }) => {
        return {
          tabAll: false,
          tabActive: false,
          tabCompleted: !tabCompleted
        }
      })
    }
  }

  render() {

    const { items, counter, tabAll, tabActive, tabCompleted } = this.state;

    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm addItem={this.addNewItem} />
          </header>
          <section className="main">
            <TaskList items={items} onDeleteItem={this.onDeleteItem} onComplete={this.onComplete} tabAll={tabAll} tabActive={tabActive} tabCompleted={tabCompleted}/>
            <Footer counter={counter} onTabClick={this.onTabClick} tabAll={tabAll} tabActive={tabActive} tabCompleted={tabCompleted} onClear={this.onClear} />
          </section>
        </section>
      </div>
    );
  }
}

export default App
