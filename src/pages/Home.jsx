import React, { useContext, useEffect, useRef, useState } from "react";

import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import PizzaList from "../components/PizzaList";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../redux/filterSlice";
import { setIsLoading, setPizzas, clearPizzas } from "../redux/pizzaSlice";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const { search, category, sort, page } = useSelector((state) => state.filter);

  const [params, setParams] = useSearchParams();
  const isMounted = useRef(false);
  const isSearch = useRef(false);

  const fetchPizzas = () => {
    dispatch(setIsLoading(true));

    axios
      .get("https://658fd4fccbf74b575eca2c05.mockapi.io/pizza/", {
        params: {
          category: category > 0 ? category : null,
          sortBy: sortList[sort].field,
          order: sortList[sort].order,
          title: search,
          page: page + 1,
          limit: 4,
        },
      })
      .then((res) => {
        dispatch(setPizzas(res.data));
      })
      .catch((err) => {
        dispatch(clearPizzas());
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
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
    if (!isSearch.current) fetchPizzas();
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
      <div className="content__items pizza-items">
        <PizzaList />
      </div>
      <div className="content__pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
