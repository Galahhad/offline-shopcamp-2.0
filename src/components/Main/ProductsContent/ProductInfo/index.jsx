import React from "react";
import styles from "./ProductInfo.module.css";
import { useDispatch } from "react-redux";
import { addToBag } from "../../../../features/reducer";
import { useSelector } from "react-redux";

const ProductInfo = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleAddToBag = (id) => {
    dispatch(
      addToBag({
        cartItem: {
          id: Math.random(),
          productId: id,
          amount: 1,
        },
        id: id,
      })
    );
  };

  const inBag = cartItems.some((cartItem) => item.id === cartItem.productId);

  return (
    <div className={styles.product_wrapper}>
      <div className={styles.img_wrapper}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.prices_wrapper}>
      <p className={styles.price}>
        {`${item.price - (item.price / 100) * item.discount}₽`}
        </p>
        <p className={styles.discount}>
          {item.discount > 0 ?`${item.price}₽` : '-'}
          </p>
      </div>
      <p className={styles.product_name}>{item.name}</p>
      <button
        onClick={() => handleAddToBag(item.id)}
        disabled={inBag || !item.left}
      >
        {inBag ? "В корзине" : !item.left ? "Нет в наличии" : "Купить"}
      </button>
    </div>
  );
};

export default ProductInfo;
