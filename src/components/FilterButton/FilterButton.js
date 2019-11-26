import React, {Component} from 'react';

import './FilterButton.sass'


export default class FilterButton extends Component {
  render() {
    return(
      <div class="button-group btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-outline-primary active">
          <input type="radio" name="options" id="all" autocomplete="off" checked/> All
        </label>
        <label class="btn btn-outline-primary">
          <input type="radio" name="options" id="active" autocomplete="off"/> Active
        </label>
        <label class="btn btn-outline-primary">
          <input type="radio" name="options" id="done" autocomplete="off"/> Done
        </label>
      </div>
    )
  }
}
