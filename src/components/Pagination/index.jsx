import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/filterSlice";

const Pagination = () => {
  const page = useSelector((state) => state.filter.page);
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      forcePage={page}
      activeLinkClassName={styles.link_active}
      containerClassName={styles.pagination}
      disabledLinkClassName={styles.link_disabled}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => {
        dispatch(setPage(event.selected));
      }}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
