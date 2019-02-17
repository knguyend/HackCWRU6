import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetails from './main/itemDetails/ItemDetails';
import Main from './main/Main';
import NavBar from './main/navigation/Navigation';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/item/:id" component={ItemDetails} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
