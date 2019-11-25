import React from 'react';

import ToDoListItem from './ToDoListItem.js'

const ToDoList = ({toDo}) => {
  const elements = toDo.map(item => {
    const { id, ... itemProps } = item
    
    return (
      <li key={item.id}>
        <ToDoListItem { ... itemProps } />
      </li>
      )
    })
  
  return( <ul>{elements}</ul>) 
}

export default ToDoList
