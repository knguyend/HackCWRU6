import React from "react";
//import "./Main.css"
import Navigation from "./navigation/Navigation";
import Items from "./homepage/Items"

class Main extends React.Component {

  state = {
    searchKey: ""
  }

  setItems = searchKey => {
    this.setState({ searchKey })
  }

  onSearchButtonClick = event => {
    this.setState({searchKey: event.target.value});
  }

  render() {
    return (
      <section className="main">
        <Navigation />
        <Items searchKey={this.state.searchKey}/>
      </section>
    )
  }
}

export default Main;