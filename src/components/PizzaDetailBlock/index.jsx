import React, { useEffect } from "react";
import styles from "./PizzaDetailBlock.module.scss";
import PizzaInterections from "../PizzaInterections";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaById, selectPizzaById } from "../../redux/pizzaSlice";
import PizzaDetailSkeleton from "../PizzaDetailSkeleton";

const PizzaDetailBlock = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const status = useSelector((state) => state.pizza.status);
  const pizza = useSelector(selectPizzaById(id));
  const { title, composition, imageUrl } = { ...pizza };

  useEffect(() => {
    if (!pizza) {
      dispatch(fetchPizzaById(id));
    }
  }, []);

  if (status === "error") throw new Response("Not Found", { status: 404 });

  return (
    <div className={["pizza-block", styles.block].join(" ")}>
      {status === "loading" ? (
        <PizzaDetailSkeleton />
      ) : (
        <>
          <div className={styles.left}>
            <img src={imageUrl} alt="pizza" />
          </div>
          <div className={styles.right}>
            <h2>{title}</h2>
            <p>{composition}</p>
            <PizzaInterections pizza={pizza} />
          </div>
        </>
      )}
    </div>
  );
};

export default PizzaDetailBlock;
