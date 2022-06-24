import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function Test(){
    return <h1>Hello World</h1>;

}
const element = <Test/>

ReactDOM.render(element, document.getElementById('root'));