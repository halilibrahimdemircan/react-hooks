import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainHeader() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to="/">
                {' '}
                Welcome{' '}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
