import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js'
import Search from './components/Search.js'
import ToDoList from './components/ToDoList.js'

const App = () => {
  return(
    <div>
      <Header/>
      <Search/>
      <ToDoList/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
