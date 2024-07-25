import React from "react";
import PizzaInterections from "./PizzaInterections";
import { useNavigate } from "react-router-dom";

const PizzaBlock = ({ pizza }) => {
  const { id, title, imageUrl } = { ...pizza };

  const router = useNavigate();

  return (
    <div className="pizza-block">
      <img
        onClick={() => router(`/pizza/${id}`)}
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <PizzaInterections pizza={pizza} />
    </div>
  );
};

export default PizzaBlock;
