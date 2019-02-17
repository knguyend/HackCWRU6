import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';
import NavBar from './main/navigation/Navigation';

class App extends Component {
  state = {
    searchKey: ''
  };

  setItems = searchKey => {
    this.setState({ searchKey });
  };

  onSearchButtonClick = event => {
    this.setState({ searchKey: event.target.value });
  };


  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar setItems={this.setItems}/>
          <Main searchKey={this.state.searchKey}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
