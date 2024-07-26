import React from "react";
import PizzaBlock from "./PizzaBlock";
import PizzaSkeleton from "./PizzaSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Status } from "../redux/pizzaSlice";

// import pizzas from "../assets/pizzas.json";

const PizzaList: React.FC = () => {
  const { pizzas, status } = useSelector((state: RootState) => state.pizza);

  return (
    <>
      {status === Status.Loading
        ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
        : pizzas.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)}
    </>
  );
}

export default PizzaList;
