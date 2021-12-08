import React from 'react'
import logo from './logo.svg';

import { BroswerRouter, Route, Link } from 'react-router-dom'
import About from './About.js'

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Route path="/about" component={About} />

            <div className="navigation">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="navigation-sub">
                    <Link to="/about" className="item">About</Link>
                </div>
            </div>
            <h1>Hello from Minor Mischief</h1>
        </div>
    </BroswerRouter>
  );
}

export default App;
