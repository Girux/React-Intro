import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        //  se guarda el valor del input en el estado
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
