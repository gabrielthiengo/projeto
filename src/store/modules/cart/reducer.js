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
          product: {
            code: Date.now(),
            id: action.product.id,
            title: action.product.title,
            price: action.product.price,
            quantity: action.quantity,
            size: action.size,
            color: action.color,
          },
        };

        draft.cart.push(productObject);
        draft.total += action.product.price;

        toast.success('Produto foi adicionado!');
        break;
      }
      case '@cart/REMOVE_PRODUCT_CART': {
        draft.cart.map((cartItem, index) => {
          if (cartItem.product.code === action.payload) {
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
