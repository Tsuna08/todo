import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js'
import Search from './components/Search.js'
import ToDoList from './components/ToDoList/ToDoList.js'

import './index.sass'

const toDoData = [
  {label: 'Learn React', important: false, id: 1},
  {label: 'Drink coffee', important: false, id: 2}
]

const App = () => {
  return(
    <div className='app'>
      <Header/>
      <Search/>
      <ToDoList toDo={toDoData}/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
