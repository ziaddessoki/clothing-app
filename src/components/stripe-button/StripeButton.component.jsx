import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.PUBLISHABLEKEY;

  const onToken = (token) => {
    console.log(token);
    alert("payment Went thr!!");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Clothing App"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default stripeButton;
