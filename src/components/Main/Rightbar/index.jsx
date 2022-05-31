import React from "react";
import styles from "./Rightbar.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Rightbar = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <aside className={styles.rightbar}>
      <ul>
        {categories.map((item) => {
          return (
            <NavLink
              to={`/category/${item.categoryId}`}
              key={item.categoryId}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <li className={styles.back}>{item.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};

export default Rightbar;
