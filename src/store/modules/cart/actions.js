export function addProductToCart(product, quantity, size) {
  return {
    type: '@cart/ADD_PRODUCT_CART',
    product,
    quantity,
    size,
  };
}
export function removeProductFromCart(productId) {
  return {
    type: '@cart/REMOVE_PRODUCT_CART',
    payload: productId,
  };
}
