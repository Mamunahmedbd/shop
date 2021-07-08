import React, {useContext} from "react";
import { isCart } from '../helpers'
import {CartContext} from '../../Context/Cart-Context'
import { withRouter } from "react-router-dom";
import "./Featured-Product.style.scss";

const FeaturedProduct = (props) => {
  const { title, price, imageUrl, history, id, description} = props;
  const product = {title, price, imageUrl, id, description}
  const {addProduct, cartItems, increaseProduct} = useContext(CartContext)
  console.log(history + "Mamun");
  return (
    <div className="featured-product">
      <div className="featured-image">
        <img
          src={imageUrl}
          alt="Product-alt"
          onClick={() => history.push(`/product/${id}`)}
        />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!isCart(product, cartItems) &&
        <button className="button is-black" id='btn-black-outline' onClick={() => addProduct(product)}>ADD TO CART</button>
        }
        {
          isCart(product, cartItems) &&
          <button className="button is-white" id='btn-white-outline' onClick={() => increaseProduct(product)}>ADD MORE</button>
        }
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
