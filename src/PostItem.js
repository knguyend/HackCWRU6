import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  background: white;
  border: 3px solid red;
  border-radius: 5px;
  top: 25px;
  left: 10%;
  text-align: center;

  button {
    margin: 15px;
  }

  select {
    display: block;
  }
`;

class PostItem extends React.Component {
  state = {
    itemName: '',
    itemDesc: '',
    itemCondition: '',
    phoneNumber: ''
  };

  handleChange = e => {
    const target = e.target.name;
    this.setState({ [target]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.closePopup(e);
  };

  render() {
    return (
      <Div className="PostItem">
        <h2>Post an Item</h2>
        <form>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          <label htmlFor="itemName">Item Name</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <br />
          <select
            id="itemCondition"
            selected={this.state.itemCondition}
            onChange={this.handleChange}
          >
            <option value="new">Like New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
          <label htmlFor="itemCondition">Item Condition</label>
          <br />
          <textarea
            name="itemDesc"
            id="itemDesc"
            cols="30"
            rows="10"
            value={this.state.itemDesc}
            onChange={this.handleChange}
          />
          <label htmlFor="itemDesc">Description</label>
          <br />
          <input type="file" name="pictureUpload" id="pictureUpload" />
          <label htmlFor="pictureUpload" />
          <br />
          <br />
          <input type="submit" value="Post" onClick={this.handleSubmit} />
          <button onClick={this.props.closePopup}>Close Popup</button>
        </form>
      </Div>
    );
  }
}

export default PostItem;
