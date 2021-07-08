import React, { useContext } from "react";
import { ProductContext } from "../../Context/Products-Context";
import FeaturedProduct from "../Shared/Featured-Product";
import "../../App.scss";

const FeaturedProductCollection = () => {
  const { products } = useContext(ProductContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);
  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Featured Product Collection</h2>
      <div className="products">{productItems}</div>
    </div>
  );
};

export default FeaturedProductCollection;
