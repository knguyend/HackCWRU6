import React from "react";
import EachItem from "./EachItem"

class Items extends React.Component {
  state = {
      items: []
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
    fetchItems = (searchKey) => { //TODO(ML): Create fetch response to return array of item objects
        // .then(response => response.json())
        // .then(data => this.storeItems(data))
        // .catch(error => console.log(error));
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
