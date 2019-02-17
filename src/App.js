import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';
import NavBar from './main/navigation/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
