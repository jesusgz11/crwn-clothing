const findCartItem = (cartItems, id) =>
  cartItems.find((cartItem) => cartItem.id === id);

const cartItemQuantityOperation = (cartItems, by, id) =>
  cartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity + by }
      : cartItem
  );

export const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findCartItem(cartItems, cartItemToAdd.id);
  if (existingCartItem) {
    return cartItemQuantityOperation(cartItems, 1, cartItemToAdd.id);
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findCartItem(cartItems, cartItemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }
  return cartItemQuantityOperation(cartItems, -1, cartItemToRemove.id);
};
