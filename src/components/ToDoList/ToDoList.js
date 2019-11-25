import React from 'react';

import ToDoListItem from '../ToDoListItem/ToDoListItem.js'
import './ToDoList.sass'

const ToDoList = ({toDo}) => {
  const elements = toDo.map(item => {
    const { id, ... itemProps } = item
    
    return (
      <li key={item.id} className='list-group-item'>
        <ToDoListItem { ... itemProps } />
      </li>
      )
    })
  
  return( 
    <ul className='list-group toDoList'>
      {elements}
    </ul>
  ) 
}

export default ToDoList
