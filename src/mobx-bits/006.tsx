import React, { ChangeEvent } from 'react';

export default class ClassicReactState extends React.Component {
  state = { name: '' };

  onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="demo-title">Classic React state</h2>
        <input type="text" value={this.state.name} onChange={this.onNameChange} />
        <br /> <br />
        Hello, {this.state.name}
      </div>
    );
  }
}
