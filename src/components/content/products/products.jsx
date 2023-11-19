import React from "react";
import styles from "./products.module.css";
import product1 from "../../../assets/imgs/content/products/product1.jpg";
import product2 from "../../../assets/imgs/content/products/product2.jpg";
import product3 from "../../../assets/imgs/content/products/product3.jpg";
import product4 from "../../../assets/imgs/content/products/product4.jpg";
import product5 from "../../../assets/imgs/content/products/product5.jpg";
import product6 from "../../../assets/imgs/content/products/product6.jpg";
import latest from "../../../assets/imgs/content/products/latest_pizzas.png";
function Products() {
  return (
    <section id="products" className="w-full lg:mt-12 min-h-[100vh]">
    <div className="w-full h-[13vh] flex items-center justify-center mb-1">
    <img src={latest} className="h-[13vh] w-[300px] object-cover" alt="" srcset="" />
    </div>
      <section
        id="products"
        className={`${styles.products_container} lg:w-[90%] mx-auto min-h-[100vh] gap-4 p-3`}
      >
        <img
          className={`${styles.img} shadow-xl`}
          src={product1}
          alt="Pizza de carne y vegetales"
          loading="lazy"
        />
        <img
          className={`${styles.img} shadow-xl`}
          src={product3}
          alt="Pizza de chorizo"
          loading="lazy"
        />
        <img
          className={`${styles.img} shadow-xl`}
          src={product2}
          alt="Pizza con vegetales"
          loading="lazy"
        />
        <img
          className={`${styles.img} shadow-xl`}
          src={product4}
          alt="Pizza con cebollas"
          loading="lazy"
        />
        <img
          className={`${styles.img} shadow-xl`}
          src={product5}
          alt="Pizza con vegetales"
          loading="lazy"
        />
        <img
          className={`${styles.img} shadow-xl`}
          src={product6}
          alt="Pizza forma de torta"
          loading="lazy"
        />
      </section>
    </section>
  );
}

export default Products;
