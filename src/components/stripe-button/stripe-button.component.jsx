import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KUG2cG3I9OONYfoo5wHrAd6t3YpzDRjAd7P08gB11FiIJxjEU62aQYGy3ynRwPcVAvJXnEVrBcehwvTAeEi8cIj00XqJwHpVx';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
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
