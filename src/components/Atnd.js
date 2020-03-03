import React, { Component } from 'react'
import store from '../store'

export default class Atnd extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }
  render() {
    return (
      this.state.atnd.map(item => (
        <table className="manager-container">
          <tr>
            <th>Mananger</th>
            <th>ATND</th>
            <th>Productivity</th>
            <th>Earned Hrs</th>
            <th>Total Worked Hrs</th>
          </tr>
          <tr>
            <td>{item.name}</td>
            <td>{item.atnd} hrs</td>
            <td>{item.productivity} %</td>
            <td>{item.earnedHrs} hrs</td>
            <td>{item.totalHrs} hrs</td>
          </tr>
        </table>
      ))
    )
  }
}

