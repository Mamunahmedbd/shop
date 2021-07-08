import React, { useContext } from "react";
import Layout from "../Shared/layout";
import FeaturedProduct from "../Shared/Featured-Product";
import { ProductContext } from "../../Context/Products-Context";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const allProduct = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">This is Product Collection Page</h2>
        <div className="product-list">{allProduct}</div>
      </div>
    </Layout>
  );
};

export default Shop;
