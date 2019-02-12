import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  };

  countHandler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          data-testid="counter-button"
          type="button"
          onClick={this.countHandler}
        >
          {count}
        </button>
      </div>
    );
  }
}
