import React, { Component } from 'react'
import store from '../store';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }
  render() {
    return (
      <div className="home-dispaly">
        {this.state.managers.map(item => (
          <div key={item.id}>
            <table className="manager-container">
              <tbody>
                <tr>
                  <th>Manager</th>
                  <th>HPC</th>
                  <th>VOC</th>
                  <th>ATND</th>
                  <th>AIQ</th>
                </tr>
                <tr>
                  <td>
                    <td>{item.name}</td>
                    <td>{item.cbr}</td>
                  </td>
                  <td>{item.hpc}</td>
                  <td>{item.voc}%</td>
                  <td>{item.atnd}hrs</td>
                  <td>{item.aiq}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    )
  }
}

