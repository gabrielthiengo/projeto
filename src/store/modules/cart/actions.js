export function addProductToCart(product, quantity, size, color) {
  return {
    type: '@cart/ADD_PRODUCT_CART',
    product,
    quantity,
    size,
    color,
  };
}
export function removeProductFromCart(productId) {
  return {
    type: '@cart/REMOVE_PRODUCT_CART',
    payload: productId,
  };
}
