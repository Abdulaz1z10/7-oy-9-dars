import React from 'react'
import { Link } from 'react-router-dom'
import '../posts/style.scss'
export default function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="first btn btn-success ">Products</Link>
      <Link to="/brands" className="second btn btn-primary ">Brands</Link>
      <Link to="/models" className="third btn btn-primary ">Models</Link>
    </div>
  );
}
