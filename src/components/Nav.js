import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/Addform`}>Add Picture Day</Link>
            </li>
            <li>
              <Link to={`/FindPicture`}>Search Picture Day</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
