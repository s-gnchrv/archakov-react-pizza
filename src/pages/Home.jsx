import React, { useContext, useEffect, useRef, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../redux/filterSlice";
import { fetchPizzas } from "../redux/pizzaSlice";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const { search, category, sort, page } = useSelector((state) => state.filter);
  const status = useSelector((state) => state.pizza.status);

  const [params, setParams] = useSearchParams();
  const isMounted = useRef(false);
  const isSearch = useRef(false);

  const getPizzas = async () => {
    dispatch(fetchPizzas());
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const filter = {};
    if (params.get("category"))
      filter.category = Number(params.get("category"));
    if (params.get("sort")) filter.sort = Number(params.get("sort"));
    if (params.get("page")) filter.page = Number(params.get("page"));

    if (Object.keys(filter).length > 0) {
      dispatch(setFilter(filter));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) getPizzas();
    isSearch.current = false;
  }, [category, sort, search, page]);

  useEffect(() => {
    if (isMounted.current) {
      const obj = {};
      if (category > 0) obj.category = category;
      if (sort > 0) obj.sort = sort;
      if (page > 0) obj.page = page;

      setParams(obj);
    }
    isMounted.current = true;
  }, [category, sort, page]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">
        {search ? `Пиццы по запросу "${search}"` : "Все пиццы"}
      </h2>
      {status === "error" ? (
        <div className="content__error">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
            позже.
          </p>
        </div>
      ) : (
        <div className="content__items pizza-items">
          <PizzaList />
        </div>
      )}
      <div className="content__pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
