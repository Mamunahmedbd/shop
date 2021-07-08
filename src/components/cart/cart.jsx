import React, { useContext } from "react";
import {withRouter} from 'react-router-dom'
import { CartContext } from "../../Context/Cart-Context";
import "./cart.style.scss";
import shopping from "../../assets/shopping-bag.png";

const CartIcon = ({history}) => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log(cartItems)
  return (
    <div className="cart-container" onClick={() => history.push('/cart')}>
      <img src={shopping} alt="shopping-cart" />
      {
        itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null
      }
    </div>
  );
};

export default withRouter(CartIcon);
