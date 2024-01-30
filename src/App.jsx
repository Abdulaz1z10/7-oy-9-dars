import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Menu from "./features/posts/Menu";
import Models from './features/posts/Models';
import Products from './features/posts/Products';
import Brands from './features/posts/Brands';
import "./features/posts/style.scss"
// import { Link } from 'react-router-dom';

export default function App() {
  return (
      <div className='big_app'>
        <div className='menu11'>
          <Menu/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/models" element={<Models />} />
          </Routes>
        </div>
      </div>
  )
}
