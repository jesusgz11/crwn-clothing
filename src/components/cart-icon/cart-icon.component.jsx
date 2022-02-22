import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const toggleCartHidden = () => {
    dispatch(toggleCartHiddenAction());
  };

  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartContainer>
  );
};

export default CartIcon;
