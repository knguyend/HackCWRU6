import React from "react";
import EachItem from "./EachItem"

class Items extends React.Component {
  state = {
      items: [{id: 123123, photoUrl: "", title: "Guitar", description: "Yamaha", condition:"New", ownerId: "3131"}]
    };

    //var item12 = {id: 123123, photoUrl: "", title: "Guitar", description: "Yamaha", condition:"New", ownerId: "3131"}';

    componentDidMount() {
      this.fetchItems(this.props.searchKey);
      //this.setState({items: [{item1}]});
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
            this.state.items.map( item  => (
              <EachItem key={item.id} item={item} />
            ))
          }
        </ul>
      </section>
    )
  }
}

export default Items;
