import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import Footer from "../../UI/Footer";
import { clearCart, getCart } from "./CartSlice";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <>
      <h2 className="secondary-header">Your Cart</h2>
      <ul>
        {cart.map((item) => {
          return <CartItem item={item} key={item.name} />;
        })}
      </ul>

      <div>
        <button>Order Now</button>

        <button className="btn" onClick={() => dispatch(clearCart())}></button>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
