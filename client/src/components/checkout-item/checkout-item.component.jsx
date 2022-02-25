import { useDispatch } from 'react-redux';
import {
  clearItemAction,
  addItemAction,
  removeItemAction,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  Text,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item';
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemAction(cartItem));
  };

  const addItem = () => {
    dispatch(addItemAction(cartItem));
  };

  const clearItem = () => {
    dispatch(clearItemAction(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`item ${name}`} />
      </ImageContainer>
      <Text>{name}</Text>
      <QuantityContainer>
        <div onClick={removeItem}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={addItem}>&#10095;</div>
      </QuantityContainer>
      <Text>${price}</Text>
      <RemoveButtonContainer onClick={clearItem}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
