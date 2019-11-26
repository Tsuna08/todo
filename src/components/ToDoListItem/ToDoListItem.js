import React, {Component} from 'react';

import './ToDoListItem.sass'

class ToDoListItem extends Component {
  render() {
    const {label, important = false} = this.props

    return(
      <span className={important ? 'important' : null}>{label}</span>
    )
  }
}

export default ToDoListItem
