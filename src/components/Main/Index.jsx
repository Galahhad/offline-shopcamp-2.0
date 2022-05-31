import React from "react";
import styles from "./Main.module.css";
import ProductsContent from "./ProductsContent";
import Rightbar from "./Rightbar";

const Main = ({text}) => {
  return (
    <main className={styles.main}>
      <Rightbar />
      <ProductsContent text={text}/>
    </main>
  );
};

export default Main;