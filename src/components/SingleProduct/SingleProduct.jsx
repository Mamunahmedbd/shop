import React, { useContext, useState, useEffect } from "react";
import {isCart} from '../helpers'
import {CartContext} from '../../Context/Cart-Context'
import { withRouter } from "react-router-dom";
import { ProductContext } from "../../Context/Products-Context";
import Layout from "../Shared/layout";
import "./single-product.style.scss";

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductContext);
  const {addProduct, cartItems, increaseProduct} = useContext(CartContext)
  const { id } = match.params;
  // console.log(match);
  // console.log(id);
  // console.log(push);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const singleProduct = products.find(
      (item) => Number(item.id) === Number(id)
    );
    if (!singleProduct) {
      return push("/");
    }
    setProduct(singleProduct);
  }, [id, products, push, setProduct]);
  if (!product) {
    return null;
  }
  const { title, price, description, imageUrl } = product;
  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="Product-alt" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <span>{price}</span>
          </div>
          <div className="add-to-cart-btns">
            {
              !isCart(product, cartItems) && 
            <button className="button is-white shop-btn" id="btn-white-outline" onClick={()=> addProduct(product)}>
              ADD TO CART
            </button>
            }{
              isCart(product, cartItems) &&
              <button className="button is-white shop-btn" id="btn-white-outline" onClick={()=> increaseProduct(product)}>
              ADD MORE
            </button>
            }
            <button className="button is-black shop-btn" id="btn-white-outline">
              PROCESSED TO CART
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);
