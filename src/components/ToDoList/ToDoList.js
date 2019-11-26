import React from 'react';

import ToDoListItem from '../ToDoListItem/ToDoListItem.js'
import './ToDoList.sass'

const ToDoList = ({toDo}) => {
  const elements = toDo.map(item => {
    const { id, ... itemProps } = item
    
    return (
      <li key={item.id} className='list-group-item'>
        <ToDoListItem { ... itemProps } />
        <div className='buttonGroup'>
          <button className='button btn btn-outline-success'>
            <i className='fa fa-exclamation'></i>
          </button>
          <button className='button btn btn-outline-danger'>
            <i className='fa fa-trash-o'></i>
          </button>
        </div>
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
