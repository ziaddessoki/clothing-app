import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  console.log(process.env);

  const onToken = (token) => {
    console.log(token);
    alert("payment Went thr!!");
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("payment success", res);
      })
      .catch((err) => {
        console.log("payment error", JSON.parse(err));
        alert("Payment Failure");
      });
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Clothing App"
        ComponentClass="StripeCheckout"
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

//4242 4242 4242 4242 01/20 s:123

export default StripeButton;
