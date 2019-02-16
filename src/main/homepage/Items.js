import React from "react";
import EachItem from "./EachItem"

class Items extends React.Component {
  state = {
      movies: []
    };

    componentDidMount() {
      this.fetchItems(this.props.searchKey);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.searchKey !== nextProps.searchKey) {
        this.fetchItems(nextProps.searchKey);
      }
    }

    //function
    fetchItems = (searchKey) => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.storeMovies(data))
        .catch(error => console.log(error));
    }

  storeItems = data => {
    const items = data.results.map(result => {
      const  { id, photoUrl, title, description, condition, ownerId} = result;
      return { id, photoUrl, title, description, condition, ownerId};
    });
    this.setState({ items })
  }

  render() {
    return (
      <section>
        <ul className="items">
          {
            this.state.movies.map( item  => (
              <EachItem key={item.id} item={item} />
            ))
          }
        </ul>
      </section>
    )
  }
}

export default Items;
