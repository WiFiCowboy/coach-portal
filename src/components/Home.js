import React, { Component } from 'react'
import store from '../store';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }
  render() {
    return (
      <div>
        {this.state.managers.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.cbr}</p>
          </div>
        ))}



      </div>
    )
  }
}