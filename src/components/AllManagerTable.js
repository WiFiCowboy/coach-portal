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
        <tr key={item.id}>
          <td>
            {item.name}
          </td>
          <Link to="/hpc">
            <td>{item.hpc}</td>
          </Link>
          <td>{item.voc}%</td>
          <td>{item.atnd}hrs</td>
          <td>{item.aiq}%</td>
        </tr>
      ))

    )
  }
}