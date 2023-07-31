import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51NZqGLG7k7IP0PnrFDJBSym9oOYnFA4yOzRdv4DPayx8QQwtDXiUKVGQOmBdw0DG0AIcSYaAij6fLgyBxxgO2k0A00kCkf46YN";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton
