import React from 'react'
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <p className="text-2xl font-bold text-gradient">Resumhint</p>
      </Link>

    </nav>

  )
}

export default Navbar
