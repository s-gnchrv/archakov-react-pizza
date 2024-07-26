import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";
import { RootState, useAppDispatch } from "../redux/store";

const catList: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const category = useSelector((state: RootState) => state.filter.category);
  const dispatch = useAppDispatch();

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
