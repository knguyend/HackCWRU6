import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemDetails from './main/itemDetails/ItemDetails';
import Main from './main/homepage/Main';
import NavBar from './main/navigation/Navigation';
import SignIn from './SignIn';

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
          <NavBar setItems={this.setItems} />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Main {...props} searchKey={this.state.searchKey} />
              )}
            />
            <Route path="/item/:id" component={ItemDetails} />
            <Route path="/sign-in" component={SignIn} />
            <Route
              path="/"
              render={props => (
                <Main {...props} searchKey={this.state.searchKey} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
