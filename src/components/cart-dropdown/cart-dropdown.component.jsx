import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/checkout');
    dispatch(toggleCartHiddenAction());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={navigateToCheckout}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
