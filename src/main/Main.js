import React from "react";
import "./Main.css"
import Navigation from "./navigation/Navigation";

class Main extends React.Component {

  state = {
    items: [],
  }

  setItems = items => {
    this.setState({ items })
  }

  onSearchButtonClick = () => {
    ;
  }

  render() {
    return (
      <section className="main">
        <Navigation />
        <Items items={this.state.items}/>
      </section>
    )
  }
}

export default Main;