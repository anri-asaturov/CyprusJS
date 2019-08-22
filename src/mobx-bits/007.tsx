import React, { ChangeEvent } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class MobxReactState extends React.Component {
  @observable name = '';

  onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.name = event.target.value;
  };

  render() {
    return (
      <div>
        <h2 className="demo-title">Observable MobX state</h2>
        <input type="text" value={this.name} onChange={this.onNameChange} />
        <br /> <br />
        Hello, {this.name}
      </div>
    );
  }
}
