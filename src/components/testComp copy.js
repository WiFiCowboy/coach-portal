import React, { Component } from 'react'
import store from '../store';
import AllManagerTable from './AllManagerTable';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }

  render() {
    return (
      <div className="home-dispaly">
        <div >
          <table className="manager-container">
            <tbody>
              <tr>
                <th>Manager</th>
                <th>HPC</th>
                <th>VOC</th>
                <th>ATND</th>
                <th>AIQ</th>
              </tr>
              <AllManagerTable />
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

