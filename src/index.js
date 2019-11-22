import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return(
    <h1> ToDo list</h1>
    )
}
const Search = () => {
  return(
    <input placeholder='search'/>
    )
}
const ToDoList = () => {
  return(
    <ul>
      <li> Learn React </li>
    </ul>
    )
}
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