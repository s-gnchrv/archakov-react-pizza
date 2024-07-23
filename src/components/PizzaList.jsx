import React from "react";
import PizzaBlock from "./PizzaBlock";
import PizzaSkeleton from "./PizzaSkeleton";
import { useSelector } from "react-redux";

// import pizzas from "../assets/pizzas.json";

function PizzaList() {
  const { pizzas, isLoading } = useSelector((state) => state.pizza);

  return (
    <>
      {isLoading
        ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
        : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
    </>
  );
}

export default PizzaList;
