import React from 'react'
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index'

const CartItem = (props) => {
  const { title, imageUrl, price, id, description, quantity, increaseProduct, decreaseProduct, removeProduct } = props
  const product = {title, imageUrl, price, quantity, description, id }
  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={imageUrl} alt="product-icon" />
      </div>
      <div className='name-price'>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div className='quantity'>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className='btns-container'>
        <button className='btn-increase' onClick={() => increaseProduct(product)}>
          <PlusCircleIcon width='20px'/>
        </button>
        {
          quantity === 1 && <button className='btn-trash' onClick={() => removeProduct(product)}>
            <TrashIcon width='20px'/>
          </button>
        }
        {
          quantity > 1 &&
          <button className='btn-decrease' onClick={() => decreaseProduct(product)}>
            <MinusCircleIcon width='20px'/>
          </button>
        }
      </div>
    </div>
  )
}

export default CartItem
