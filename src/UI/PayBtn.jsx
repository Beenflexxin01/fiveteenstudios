import axios from "axios";

function PayBtn({ cart }) {
  const handleCheckout = async () => {
    try {
      const res = await axios({
        method: "POST",
        // url: "http://localhost:5000/api/stripe",
        // url: "/checkout-session",
        url: "http://localhost:5000/api/stripe/create-checkout-session",
        data: cart,
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.log(err.message, err.name);
    }
    console.log(cart);
  };

  return (
    <div>
      <button onClick={() => handleCheckout()} className="btn checkout-btn">
        Check Out
      </button>
    </div>
  );
}

export default PayBtn;
