// import axios from "axios";
// import { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";

import { loadStripe } from "@stripe/stripe-js";
import BackendLink from "../utils/BackendLink";
function PayBtn({ cart }) {
  // const [product, setProduct] = useState({
  //   name: "Name",
  //   price: 10,
  //   productBy: "Facebook",
  // });

  // const makePayment = (token) => {
  //   const body = {
  //     token,
  //     product,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   return   fetch("http://localhost:5000/api/payment", {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => {
  //       console.log("RESPONSE", res);
  //       const { status } = res;
  //       console.log("STATUS", status);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const makePayment = async () => {
    // const stripe = await loadStripe(import.meta.env.VITE_STRIPE_SECRET_NUMBER);
    const stripe = await loadStripe(
      "pk_test_51Odt2FDmPNeUOkUZRO8C2PRKcjvJbRxwS87qFZ8j3qpdj2GnKlY9h9OV0z7iiImwNrci37cyqJKuN8mUmD57kvoa00BUdmE8qL"
    );

    const body = {
      product: cart,
    };

    const headers = {
      // Authorization: import.meta.env.VITE_STRIPE_SECRET_NUMBER,
      "Content-Type": "application/json",
    };

    // const response = await fetch(`${BackendLink}/api/create-checkout-session`, {
    const response = await fetch(
      `http://localhost:5000/api/create-checkout-session`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div>
      {/* <StripeCheckout
        stripeKey={import.meta.env.VITE_STRIPE_SECRET_NUMBER}
        token={makePayment}
        name={product.name}
        amount={product.price * 100}>
      </StripeCheckout> */}
      <button className="btn checkout-btn" onClick={makePayment}>
        Check Out
      </button>
    </div>
  );
}

export default PayBtn;
