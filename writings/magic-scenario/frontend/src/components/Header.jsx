import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <div className="container">
      <nav>
        <h1>
          <Link to="/" className="header__brand">Leo's Magic Scenario</Link>
        </h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  )
}
