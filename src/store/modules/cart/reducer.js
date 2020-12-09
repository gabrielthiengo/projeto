import produce from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  cart: [],
  total: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_PRODUCT_CART': {
        const productObject = {
          product: action.product,
          quantity: action.quantity,
          size: action.size,
        };

        let hasProduct;

        draft.cart.map(cartItem => {
          if (cartItem.product.id === action.product.id) {
            hasProduct = -1;
          } else {
            hasProduct = 0;
          }
        });

        if (hasProduct === -1) {
          const index = draft.cart.findIndex(
            item => item.product.id === action.product.id
          );

          draft.cart[index].quantity += 1;
          draft.total += action.product.price;
        } else {
          draft.cart.push(productObject);
          draft.total += action.product.price;
        }

        toast.success('Produto foi adicionado!');
        break;
      }
      case '@cart/REMOVE_PRODUCT_CART': {
        draft.cart.map((cartItem, index) => {
          if (cartItem.product.id === action.payload) {
            draft.total -= draft.cart[index].product.price;
            draft.cart.splice(index, 1);

            toast.success('Produto foi removido do carrinho!');
          }
        });
        break;
      }
      default:
    }
  });
}
