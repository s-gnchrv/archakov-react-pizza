import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const Categories = () => {
  const category = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();

  const catList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {catList.map((catName, index) => (
          <li
            key={index}
            className={category === index ? "active" : ""}
            onClick={() => dispatch(setCategory(index))}
          >
            {catName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
