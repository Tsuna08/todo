import React from 'react';

import Header from '../Header'
import Search from '../Search/Search.js'
import ToDoList from '../ToDoList/ToDoList.js'

import './App.sass'

const toDoData = [
  {label: 'Learn React', important: false, id: 1},
  {label: 'Drink coffee', important: true, id: 2}
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

export default App