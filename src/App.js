import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './main/Main'
import Navigation from './main/navigation/Navigation';
import ItemDetails from './main/itemDetails/ItemDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/item/:id" component={ItemDetails}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
