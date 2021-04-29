import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <div>
        <h4>Find contacts by name</h4>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
