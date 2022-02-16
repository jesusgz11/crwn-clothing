const findCartItem = (cartItems, id) =>
  cartItems.find((cartItem) => cartItem.id === id);

const addOrSubstract = (isAddition, quantity) =>
  isAddition ? quantity + 1 : quantity - 1;

const cartItemQuantityOperation = (cartItems, isAddition, id) =>
  cartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: addOrSubstract(isAddition, cartItem.quantity) }
      : cartItem
  );

export const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findCartItem(cartItems, cartItemToAdd.id);
  if (existingCartItem) {
    return cartItemQuantityOperation(cartItems, true, cartItemToAdd.id);
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findCartItem(cartItems, cartItemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }
  return cartItemQuantityOperation(cartItems, false, cartItemToRemove.id);
};
