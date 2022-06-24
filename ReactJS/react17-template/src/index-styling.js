//Ex1
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// background-color -> backgroundColor

const element = <h1 style={{backgroundColor:"blue", color:"yellow"}}>Hello World</h1>

ReactDOM.render(element, document.getElementById('root'));

//Ex2
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const myStyle = { //jsobject
    backgroundColor:"red", 
    color:"yellow"
}
const element = <h1 style={myStyle}>Hello World</h1>

ReactDOM.render(element, document.getElementById('root'));

