import React, { Component } from 'react'
import store from '../store'
import { Link } from "react-router-dom";

export default class AllManagerTable extends Component {
  constructor(props) {
    super(props);
    this.state = store
  }

  render() {
    return (

      this.state.managers.map(item => (
        <tr key={item.id} >
          <td>
            {item.name}
          </td>
          <td>
            <Link to="/hpc" className="links">
              {item.hpc}
            </Link>
          </td>
          <td>
            <Link to="/voc" className="links">
              {item.voc} %
            </Link>
          </td>
          <td>
            <Link to="/atnd" className="links">
              {item.atnd} hrs
            </Link>
          </td>
          <td>
            <Link className="links">
              {item.aiq} %
            </Link>
          </td>
        </tr>
      ))

    )
  }
}