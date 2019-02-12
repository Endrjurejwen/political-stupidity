import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    text: ''
  };

  changeInputHandler = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { onSubmit } = this.props;
    const { text } = this.state;

    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={() =>
            onSubmit({
              text
            })
          }
        >
          <label htmlFor="text">
            {'text'}
            <input
              onChange={this.changeInputHandler}
              data-testid="movie-input"
              id="text"
              type="text"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
