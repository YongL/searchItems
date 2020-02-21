import React from "react";
import Card from "../card/card.js";
import "./card-list.css";

const CardList = ({ products }) => (
  <div className="card-list">
    {products.map(product => (
      <Card key={product.id} product={product} />
    ))}
  </div>
);

export default CardList;
