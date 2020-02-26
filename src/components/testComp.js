import React from 'react'
import { FaBeer, FaChartBar, FaNewspaper, FaExclamationTriangle, FaTasks, FaUsers, FaTruck, FaGlobeAmericas, FaLink, FaTable, FaTrophy } from 'react-icons/fa'

class Test extends React.Component {
  render() {
    return <ul className="icon-bar">
      <li><FaBeer /> beer</li>
      <li><FaChartBar /></li><span>My Dashboard</span>
      <li><FaNewspaper /> Communication</li>
      <li><FaExclamationTriangle /> Alerts</li>
      <li><FaTasks /> Tasks</li>
      <li><FaUsers /> Crew Meeting</li>
      <li><FaTruck /> Load</li>
      <li><FaGlobeAmericas /> maps</li>
      <li><FaLink /> Links</li>
      <li><FaTable /> Reports</li>
      <li><FaTrophy /> Recognition</li>
    </ul>
  }
}

export default Test;