import React, {Component} from 'react';

import './ToDoListItem.sass'

class ToDoListItem extends Component {
  // Что бы передать this в функцию можно делать так: 
  
  // constructor() {
  //   super()
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }

  // А можно так. Этот вариант мне больше нравится
  onLabelClick = () => { console.log(`Done: ${this.props.label}`) }
  
  render() {
    const {label, important = false} = this.props
    return(
      <span 
        className={important ? 'important' : null} 
        onClick={this.onLabelClick}>
        {label}
      </span>
    )
  }
}

export default ToDoListItem
