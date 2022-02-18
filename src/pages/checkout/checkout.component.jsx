import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  PageContainer,
  HeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <PageContainer>
    <HeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </HeaderContainer>
    {cartItems?.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 02/25 - CVV: 123
    </TestWarningContainer>
    <StripeButton price={total} />
  </PageContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
