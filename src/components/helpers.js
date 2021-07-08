export const isCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id);
}