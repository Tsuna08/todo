import React, { Component } from "react";

import "./ToDoListItem.sass";

class ToDoListItem extends Component {
  // Что бы передать this в функцию можно делать так:
  // constructor() {
  //   super()
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }
  state = { done: false, important: false };
  // А можно так. Этот вариант мне больше нравится
  onLabelClick = () => {
    // Вызывается тогда, когда стейт готов
    this.setState(({ done }) => {
      return { done: !done };
    });
  };
  onMarkImportant = () => {
    this.setState((state) => {
      return { important: !state.important };
    });
  };
  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let className = "";
    if (done) {
      className += "done ";
    }
    if (important) {
      className += "important ";
    }

    return (
      <React.Fragment>
        <span className={className} onClick={this.onLabelClick}>
          {label}
        </span>
        <div className="buttonGroup">
          <button
            className="button btn btn-outline-success"
            onClick={this.onMarkImportant}
          >
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            className="button btn btn-outline-danger"
            onClick={this.onMarkImportant}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoListItem;
