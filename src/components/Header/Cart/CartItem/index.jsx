import { useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  dec,
  deleteProduct,
  inc,
} from "../../../../features/reducer";

const CartItem = ({ item, index }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const cartProduct = products.find((product) => product.id === item.productId);

  const handleDelete = (id, cartId) => {
    dispatch(
      deleteProduct({
        cartId: cartId,
        id: id,
        amount: item.amount,
      })
    );
  };

  const handleInc = (id, productId) => {
    if (cartProduct.left > 0) {
      dispatch(
        inc({
          cart: id,
          product: productId,
        })
      );
    }
  };

  const handleDec = (id, productId) => {
    if (item.amount > 1) {
      dispatch(
        dec({
          cart: id,
          product: productId,
        })
      );
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className={styles.img_wrap}>
        <img src={cartProduct.image} alt={cartProduct.name} />
      </td>
      <td>{cartProduct.name}</td>
      <td>{cartProduct.left}</td>
      <td>
        <div className={styles.counter}>
          <button onClick={() => handleInc(item.id, cartProduct.id)}>+</button>
          <span>{item.amount}</span>
          <button onClick={() => handleDec(item.id, cartProduct.id)}>-</button>
        </div>
      </td>
      <td>
        <button
          className={styles.delete_button}
          onClick={() => handleDelete(cartProduct.id, item.id)}
        >
          <IoMdClose />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
