import React, {Component} from 'react';

import './FilterButton.sass'


export default class FilterButton extends Component {
  render() {
    return(
      <div className="button-group btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-outline-primary active">
          <input type="radio" name="options" id="all" /> All
        </label>
        <label className="btn btn-outline-primary">
          <input type="radio" name="options" id="active" /> Active
        </label>
        <label className="btn btn-outline-primary">
          <input type="radio" name="options" id="done" /> Done
        </label>
      </div>
    )
  }
}
