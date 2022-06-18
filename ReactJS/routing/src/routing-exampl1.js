import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import './App.css';


const LayoutA = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>

      <div className="lA"><Outlet /></div>
    </>
  )
};




export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutA />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }


ReactDOM.render(<App/>, document.getElementById('root'));