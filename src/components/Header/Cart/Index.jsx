import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ setTable, table }) => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className={styles.table_wrapper}>
      {cartItems.length > 0 && table ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Товар</th>
              <th>Остаток</th>
              <th>Кол-во</th>
              <th>
                <button
                  className={styles.close_button}
                  onClick={() => setTable(!table)}
                >
                  Закрыть
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              return <CartItem item={item} index={index} key={item.id} />;
            })}
          </tbody>
        </table>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "gray" }}>Корзина пуста</p>
          <button
            className={styles.close_button}
            onClick={() => setTable(!table)}
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
