import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KUG2cG3I9OONYfoo5wHrAd6t3YpzDRjAd7P08gB11FiIJxjEU62aQYGy3ynRwPcVAvJXnEVrBcehwvTAeEi8cIj00XqJwHpVx';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment Error:', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      token={onToken}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
