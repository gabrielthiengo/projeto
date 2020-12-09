import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/GET_ALL_PRODUCTS': {
        break;
      }
      case '@cart/SET_ALL_PRODUCTS': {
        action.product.map(product => {
          return draft.products.push(product);
        });
        break;
      }
      default:
    }
  });
}
