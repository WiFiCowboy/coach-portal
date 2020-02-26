import React from 'react'
import { FaBeer, FaChartBar, FaNewspaper, FaExclamationTriangle, FaTasks, FaUsers, FaTruck, FaGlobeAmericas, FaLink, FaTable, FaTrophy, FaEdit } from 'react-icons/fa'

class IconBar extends React.Component {
  render() {
    return <div className="icon-bar">
      <div>
        <span className="fa"><FaChartBar className="chart" /></span>
        <h4>My Dashboard</h4>
      </div>
      <div>
        <span className="fa"><FaNewspaper className="news" /></span>
        <h4>Communication</h4>
      </div>
      <div>
        <span className="fa"><FaExclamationTriangle className="tri" /></span>
        <h4>Alerts</h4>
      </div>
      <div>
        <span className="fa"><FaTasks className="task" /></span>
        <h4>Tasks</h4>
      </div>
      <div>
        <span className="fa"><FaEdit className="docs" /></span>
        <h4>Documentation</h4>
      </div>
      <div>
        <span className="fa"><FaUsers className="users" /> </span>
        <h4>Crew Meeting</h4>
      </div>
      <div>
        <span className="fa"><FaTruck className="truck" /></span>
        <h4>Load</h4>
      </div>
      <div>
        <span className="fa"><FaGlobeAmericas className="globe" /></span>
        <h4>maps</h4>
      </div>
      <div>
        <span className="fa"><FaLink className="link" /></span>
        <h4>Links</h4>
      </div>
      <div>
        <span className="fa"><FaTable className="table" /></span>
        <h4>Reports</h4>
      </div>
      <div>
        <span className="fa"><FaTrophy className="trophy" /></span>
        <h4>Recognition</h4>
      </div>
    </div>
  }
}

export default IconBar;