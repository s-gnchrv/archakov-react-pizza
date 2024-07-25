import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";

export const doughTypes = ["тонкое", "традиционное"];

const PizzaInterections = ({ pizza }) => {
  const { id, types, sizes, price } = { ...pizza };

  const [dough, setDough] = useState(0);
  const [size, setSize] = useState(0);

  const dispatch = useDispatch();

  const count = useSelector((state) => {
    const item = state.cart.items.find(
      (item) => item.pizzaId === id && item.type === dough && item.size === size
    );
    return item ? item.count : 0;
  });

  const onAddClick = () => {
    dispatch(addItem({ pizza, count: 1, type: dough, size }));
  };

  useEffect(() => {
    if (!types.includes(0)) setDough(1);
  }, []);

  return (
    <>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              className={dough === type ? "active" : ""}
              onClick={() => setDough(type)}
            >
              {doughTypes[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((s, index) => (
            <li
              key={index}
              className={size === index ? "active" : ""}
              onClick={() => setSize(index)}
            >
              {s} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={onAddClick}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </div>
      </div>
    </>
  );
};

export default PizzaInterections;
