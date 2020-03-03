import React, { Component } from 'react'
import store from '../store'

export default class Voc extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }
  render() {
    return (
      this.state.voc.map(item => (
        <table className="manager-container">
          <tr>
            <th>Mananger</th>
            <th>VOC</th>
            <th>AIQ</th>
          </tr>
          <tr>
            <td>{item.name}</td>
            <td>{item.voc}</td>
            <td>{item.aiq}</td>
          </tr>
        </table>
      ))
    )
  }
}