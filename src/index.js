import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js'
import Search from './components/Search.js'
import ToDoList from './components/ToDoList.js'

const toDoData = [
  {label: 'Learn React', important: false},
  {label: 'Drink coffee', important: false}
]

const App = () => {
  return(
    <div>
      <Header/>
      <Search/>
      <ToDoList toDo={toDoData}/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
