import React from 'react'

const NavBar = props =>{
  return (
    <div className="nav">
      <ul>
        <li><i className="material-icons">list</i></li>
        <li><i className="material-icons">assessment</i></li>
        <li className="logo">
          <a href="./"><h2>POMODORO</h2></a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar