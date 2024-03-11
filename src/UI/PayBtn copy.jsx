// import axios from "axios";
// import { useSelector } from "react-redux";

function PayBtn({ cart }) {
  //   const user = useSelector((state) => state.auth);

  const handleCheckout = async () => {
    // axios
    //   .post(
    //     //   `http://localhost:5173/products`,
    //     "http://localhost:5173/products",
    //     // `http://localhost:5173/products/create-checkout-session`,
    //     {
    //       cart,
    //       // userId: user._id,
    //     }
    //   )
    //   .then((res) => {
    //     if (res.data.url) {
    //       window.location.href = res.data.url;
    //     }
    //   })
    //   .catch((err) => console.log(err.message));
    // try {
    //   const res = await axios({
    //     method: "POST",
    //     url: "/api/arrivals",
    //     cart,
    //     // url: "api/stripe/create-checkout-session",
    //   });
    //   if (res.data.url) {
    //     window.location.href = res.data.url;
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      const url = `http://localhost:5173`;
      const res = await fetch("api/stripe");

      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(cart);

  return (
    <div>
      <button onClick={() => handleCheckout()} className="btn checkout-btn">
        Check Out
      </button>
    </div>
  );
}

export default PayBtn;
