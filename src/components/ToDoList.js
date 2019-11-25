import React from 'react';

import ToDoListItem from './ToDoListItem.js'

const ToDoList = ({toDo}) => {
  const elements = toDo.map(item => {
    return (
      <li><ToDoListItem { ... item } />
      </li>
      )
    })
  
  return( <ul>{elements}</ul>) 
}

export default ToDoList
