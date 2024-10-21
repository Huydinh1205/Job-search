import React from "react";
import Price from "./Price";

const Card = ({ title, description, price, children }) => {
  console.log("Card");
  return (
    <>
      <div>{title} </div>
      <p>{description}</p>
      <Price price={price} />
      {children}
    </>
  );
};

export default Card;
