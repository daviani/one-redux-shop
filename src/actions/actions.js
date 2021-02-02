export const actions = {
  GET_ITEMS: 'GET_ITEMS',
  ADD_TO_CART: 'ADD_TO_CART',
  UPDATE_CART: 'UPDATE_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  SAVE_CART: 'SAVE_CART',
}
//Universally unique identifier (v4)
const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // eslint-disable-next-line no-mixed-operators
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const addToCart = (item, quantity) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id: uuid(), quantity: quantity, details: item },
  }
}

export const updateCart = (id, quantity) => {
  return {
    type: actions.UPDATE_CART,
    payload: { id: id, quantity: quantity }
  }
}

export const removeFromCart = item => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item,
  }
}
export const saveCart = (items) => {
  return {
    type: actions.SAVE_CART,
    payload: { items: items }
  }
}