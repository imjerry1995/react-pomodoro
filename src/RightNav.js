import React from 'react'
import { Link } from 'react-router-dom'

const RightNav = props =>{
  return (
    <div className="right-nav">
      <ul>
        <li>
          <Link to="/show">
            <i className="material-icons">list</i>
            <div>TO-DO LIST</div>
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <i className="material-icons">assessment</i>
            <div>ANALYTICS</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default RightNav