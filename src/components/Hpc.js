import React, { Component } from 'react'
import store from '../store'

export default class Hpc extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }
  render() {
    return (
      this.state.hpc.map(item => (
        <table>
          <tr>
            <th>hpc</th>
            <th>goal</th>
            <th>variance</th>
            <th>variance %</th>
            <th>de</th>
            <th>prod.</th>
          </tr>
          <tr>
            <td>{item.hpc}</td>
            <td>{item.goal}</td>
            <td>{item.variance}</td>
            <td>{item.varPercent} %</td>
            <td>{item.de}</td>
            <td>{item.productivity} %</td>
          </tr>
        </table>
      ))
    )
  }
}