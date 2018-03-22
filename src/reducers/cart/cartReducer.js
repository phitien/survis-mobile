import * as constant from '../../constants';
import {REHYDRATE} from 'redux-persist/constants';

export default function cartReducer(state = constant.initalState.ShoppingCart, action) {

  switch (action.type) {

    case constant.ShoppingCartAdd: {
      const item = action.payload;

      let items = [].concat(state.items);
      let sItem = items.find( i => i.id === item.id);
      if (sItem) {
        sItem.qty += 1;
      }
      else {
        sItem = Object.assign({}, item, {qty:1});
        items.push(sItem);
      }
      const count = items.length;

      return {
        ...state,
        items,
        count
      };
    }

    case constant.ShoppingCartIncrease: {
      const id = action.payload;

      let items = [].concat(state.items);
      let sItem = items.find( i => i.id === id);
      if (sItem) {
        sItem.qty += 1;
      }

      const count = items.length;
      return {
        ...state,
        items,
        count
      };
    }

    case constant.ShoppingCartDecrease: {
      const id = action.payload;

      let items = [].concat(state.items);
      let sItem = items.find( i => i.id === id);
      if (sItem) {
        sItem.qty -= 1;
      }
      if(sItem.qty <= 0){
        items = items.filter(i => i.id !== id)
      }
      const count = items.length;

      return {
        ...state,
        items,
        count
      };
    }

    case constant.ShoppingCartRemove: {
      const id = action.payload;

      let items = [].concat(state.items);

      items = items.filter(i => i.id !== id);

      const count = items.length;

      return {
        ...state,
        items,
        count
      };
    }

    case constant.ShoppingCartClear: {
      return {
        ...state,
        items: [],
        count: 0
      }
    }

    default:
      return state;
  }
}
