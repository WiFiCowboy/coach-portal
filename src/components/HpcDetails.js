import React from 'react'
import store from '../store'
import { useParams } from 'react-router-dom'

function Details() {

  // passed down from param from route id
  let { id } = useParams();
  const techs = store.techHpc.map(item => {
    if (item.managerId === id) {
      return (
        <tr key={item.id}>
          <th>{item.name}</th>
          <th>{item.hpc}</th>
          <th>{item.goal}</th>
          <th>{item.variance} hrs</th>
          <th>{item.varPercent} %</th>
          <th>{item.de} %</th>
          <th>{item.productivity} %</th>
        </tr>
      )
    }
  })

  const manager = store.hpc.map(item => {
    if (item.id === id) {
      return (
        <tr key={item.id}>
          <th>{item.name}</th>
          <th>{item.hpc}</th>
          <th>{item.goal}</th>
          <th>{item.variance} hrs</th>
          <th>{item.varPercent} %</th>
          <th>{item.de} %</th>
          <th>{item.productivity} %</th>
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
            <th>Goal</th>
            <th>Variance</th>
            <th>Variance %</th>
            <th>DE</th>
            <th>Productivity</th>
          </tr>
          {manager}
          {techs}
        </tbody>
      </table>
    </div>
  )


}

export default Details;