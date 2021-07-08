import React, {useContext} from 'react'
import { CartContext } from '../../../Context/Cart-Context'
import Layout from '../../Shared/layout'
import CartItem from './Cart-item'
import Total from './Total'
import './cart-page.style.scss'

const CartPage = () => {
  const { cartItems, itemCount, total, increaseProduct, decreaseProduct, removeProduct, clearCart } = useContext(CartContext)
  const funcs = {increaseProduct, decreaseProduct, removeProduct}
  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {
          cartItems.length === 0 ? <div  className='empty-cart'>Your Cart is Empty</div> : <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {
                  cartItems.map(item => <CartItem {...item} key={item.id} {...funcs}/>)
                }
              </div>
            </div>
            <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
          </>
        }
      </>
    </Layout>
  )
}

export default CartPage
