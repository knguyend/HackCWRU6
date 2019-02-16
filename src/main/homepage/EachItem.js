import React from "react";
//import "./EachItem.css";

const EachItem = ({ item }) => {
  const { id, title, description, photoUrl, condition, ownerId } = item;

  return (
    <li className="item">
      <img src={photoUrl} alt={title} />
      <div className="item-title">
        <h2>{title}</h2>
        <section className="item-details">
          <div className="item-description">
            <span className="description"></span>
            <span>{description}</span>
          </div>
          <div className="item-condition">
            <span className="condition">Condition: </span>
            <span>{condition}</span>
          </div>
        </section>
      </div>
    </li>
  );
};

export default EachItem;