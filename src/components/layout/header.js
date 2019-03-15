import React from 'react';
import {Link } from 'react-router-dom'
function Header() {
  return (
    <header style = {headerStyle}>
      <h1>TodoList</h1>
      <Link className="rutas" to="/">Home</Link> | <Link className="rutas" to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#355',
  padding: '10px',
  textAlign: 'center',
  color: '#f3f3f3'
}
export default Header;
