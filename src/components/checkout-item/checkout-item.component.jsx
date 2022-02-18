import { connect } from 'react-redux';
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
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`item ${name}`} />
      </ImageContainer>
      <Text>{name}</Text>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <Text>${price}</Text>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemAction(item)),
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
