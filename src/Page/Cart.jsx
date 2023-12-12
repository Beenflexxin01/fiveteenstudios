import { Link } from "react-router-dom";
import Footer from "../UI/Footer";

function Cart() {
  return (
    <>
      <div className="login">
        <h2 className="secondary-header h1">Your cart is empty</h2>
        <button className="btn btn-sign-in btn-view">
          <Link to="/products" className="cart-link">Continue Shopping</Link>
        </button>
        <div className="hr">
          <p className="text-description">
            <strong>Have an account?</strong>
          </p>
          <p className=" text-login">
            <Link to="/login">Log in</Link> to check out faster.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
