import React from "react";
import "./card.css";

const Card = ({ product }) => (
  <div className="card">
    <span>{product.name}</span>
    <span>{product.brand}</span>
  </div>
);
export default Card;
