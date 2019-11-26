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

  state = { done: false }

  // А можно так. Этот вариант мне больше нравится
  onLabelClick = () => this.setState({ done: true })  
  render() {
    const { label, important = false } = this.props
    const { done } = this.state

    let className = ''
    if(done) className += 'done '
    if(important) className += 'important '
    
    return(
      <span 
        className={className} 
        onClick={this.onLabelClick}>
        {label}
      </span>
    )
  }
}

export default ToDoListItem
