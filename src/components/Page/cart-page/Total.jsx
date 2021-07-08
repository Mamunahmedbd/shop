import React from 'react'
import {withRouter} from 'react-router-dom'

const Total = ({itemCount, total, history, clearCart}) => {
  return (
    <div style={{textAlign: 'center'}} className='total-container'>
      <div className='total'>
        <p>Total Item: {itemCount }</p>
        <p>{`Total $${total}`}</p>
      </div>
      <div className='checkout'>
        <button className='button is-black' onClick={() => history.push('/checkout')}>CHECKOUT</button>
        <button className='button is-white' onClick={() => clearCart()}>CLEAR</button>
      </div>
    </div>
  )
}

export default withRouter(Total)
