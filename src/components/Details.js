import React from 'react'
import store from '../store'
import { useParams } from 'react-router-dom'

function Details() {

  // passed down from param from route id
  let { id } = useParams();
  const techs = store.techs.map(item => {
    if (item.managerId === id) {
      return (
        <tr key={item.id}>
          <th>{item.name}</th>
          <th>{item.hpc}</th>
          <th>{item.voc} %</th>
          <th>{item.atnd} hrs</th>
          <th>{item.aiq} %</th>
        </tr>
      )
    }
  })


  const manager = store.managers.map(item => {
    if (item.id === id) {
      return (
        <tr key={item.id}>
          <th>{item.name}</th>
          <th>{item.hpc}</th>
          <th>{item.voc} %</th>
          <th>{item.atnd} hrs</th>
          <th>{item.aiq} %</th>
        </tr>
      )
    }
  })

  return (
    <div>
      <table className="manager-container">
        <tbody>
          <tr>
            <th>Name</th>
            <th>HPC</th>
            <th>VOC</th>
            <th>ATND</th>
            <th>AIQ</th>
          </tr>
          {manager}
          {techs}
        </tbody>
      </table>
    </div>
  )


}

export default Details;