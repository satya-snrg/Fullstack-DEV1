import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Index from './pages/Index';
import Main from './pages/Main';
import Nav from './pages/Nav';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';


const LayoutA = () => {
  return (
    <>
     <Header/>
     <Nav/>
     <Outlet />
     <Footer/>

    </>
  )
};



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutA />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));