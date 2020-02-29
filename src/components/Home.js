import React, { Component } from 'react'
import store from '../store';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }
  render() {
    return (
      <div className="home-dispaly">
        {this.state.managers.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            {/* <p>{item.cbr}</p> */}
          </div>
        ))}
        {this.state.results.map(item => (
          <div key={item.id}>
            <table>
              <tr>
                <th>HPC</th>
                <th>VOC</th>
                <th>ATND</th>
                <th>AIQ</th>
              </tr>
              <tr>
                <td>{item.hpc}</td>
                <td>{item.voc}%</td>
                <td>{item.atnd}hrs</td>
                <td>{item.aiq}%</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    )
  }
}