import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187,46,31)'
}

export default function Nav() {
  return (
    <nav className="row space-between">
      <NavLink
        to='/'
        exact
        activeStyle={activeStyle}
        className='nav-link'>
        <button style={{ fontSize: 30 }}
          className='btn right'
        >
          Create Package
        </button>
      </NavLink>
    </nav>
  )
}