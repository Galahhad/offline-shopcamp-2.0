import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProductsContent.module.css";
import ProductInfo from "./ProductInfo/index";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";

const ProductsContent = ({text}) => {
  const products = useSelector((state) => state.products);

  const filtered = products.filter((item) => item.name.toUpperCase().includes(text.toUpperCase()));

  const catOne = products.filter((item) => item.categoryId === 1);
  const catTwo = products.filter((item) => item.categoryId === 2);
  const catThree = products.filter((item) => item.categoryId === 3);

  return (
    <section className={styles.content}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/"
          element={filtered.map((item) => {
            return <ProductInfo item={item} key={item.id} />;
          })}
        />
        <Route
          path="/category/1"
          element={catOne.map((item) => {
            return <ProductInfo item={item} key={item.id} />;
          })}
        />
        <Route
          path="/category/2"
          element={catTwo.map((item) => {
            return <ProductInfo item={item} key={item.id} />;
          })}
        />
        <Route
          path="/category/3"
          element={catThree.map((item) => {
            return <ProductInfo item={item} key={item.id} />;
          })}
        />
      </Routes>
    </section>
  );
};

export default ProductsContent;
