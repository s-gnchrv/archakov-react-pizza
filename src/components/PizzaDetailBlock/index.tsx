import React, { useEffect } from "react";
import styles from "./PizzaDetailBlock.module.scss";
import PizzaInterections from "../PizzaInterections";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchPizzaById, selectPizzaById, Status } from "../../redux/pizzaSlice";
import PizzaDetailSkeleton from "../PizzaDetailSkeleton";
import { RootState, useAppDispatch } from "../../redux/store";

const PizzaDetailBlock: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);

  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => state.pizza.status);
  const pizza = useSelector(selectPizzaById(id));
  const { title, composition, imageUrl } = { ...pizza };

  useEffect(() => {
    if (!pizza) {
      dispatch(fetchPizzaById(id));
    }
  }, []);

  if (status === Status.Error) throw new Response("Not Found", { status: 404 });

  return (
    <div className={["pizza-block", styles.block].join(" ")}>
      {status === Status.Loading ? (
        <PizzaDetailSkeleton />
      ) : pizza && (
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
