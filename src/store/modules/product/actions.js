export function getAllProducts() {
  return {
    type: '@cart/GET_ALL_PRODUCTS',
  };
}
export function setAllProducts(product) {
  return {
    type: '@cart/SET_ALL_PRODUCTS',
    product,
  };
}
