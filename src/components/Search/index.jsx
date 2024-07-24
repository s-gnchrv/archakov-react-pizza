import React, { useCallback, useContext, useRef, useState } from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, setSearch } from "../../redux/filterSlice";

const Search = () => {
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const updateSearch = useCallback(
    debounce((val) => {
      dispatch(setSearch(val.trim()));
    }, 500),
    []
  );

  const onInputChange = (obj) => {
    const val = obj.target.value;
    setValue(val);
    updateSearch(val);
  };

  const onClearClick = () => {
    setValue("");
    dispatch(clearSearch());
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <svg
        className={`${styles.icon} ${styles.icon_search}`}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={onInputChange}
      />
      {value && (
        <svg
          onClick={onClearClick}
          class={`${styles.icon} ${styles.icon_clear}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
