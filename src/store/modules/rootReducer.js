import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import cart from './cart/reducer';
import products from './product/reducer';

export default combineReducers({ auth, user, cart, products });
