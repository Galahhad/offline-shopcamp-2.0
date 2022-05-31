import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import styles from "./Header.module.css";
import Cart from "./Cart/Index";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Search from "./Search/Search";

const Header = ({text, setText}) => {
  const [table, setTable] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <h3>Intocode Coding Bootcamp</h3>
      </NavLink>
      <Search text={text} setText={setText}/>
      <button onClick={() => setTable(!table)} className={styles.bag_button}>
        <BsBag className={styles.icon} />
        {cartItems.length > 0 && (
          <p className={styles.counter_nums}>{cartItems.length}</p>
        )}
      </button>
      {table && <Cart setTable={setTable} table={table}/>}
    </header>
  );
};

export default Header;
