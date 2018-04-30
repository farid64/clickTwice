import React from 'react';
import "./Item.css";

const Item = props => (
  <article
    onClick={() => props.clickItem(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={"item"}
  />
);

export default Item;