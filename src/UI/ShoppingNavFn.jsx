import { useState } from "react";
import ShoppingCart from "../Features/Cart/ShoppingCart";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function ShoppingNavFn({ cartCount, setCart, cart }) {
  const [cartVisibility, setCartVisibility] = useState(false);

  const cartLength = cartCount;

  const onProductRemove = (product) => {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);
      if (productIndex !== 1) {
        oldState.splice(productIndex, 1);
      }
      return [...oldState];
    });

    
  };

  return (
    <div>
      <ShoppingCart
        visibility={cartVisibility}
        cart={cart}
        setCart={setCart}
        onClose={() => setCartVisibility(false)}
        onProductRemove={onProductRemove}
      />

      <button onClick={() => setCartVisibility(true)} className="shop-btn">
        <HiOutlineShoppingBag className="icons" />
        {cartLength > 0 && <span className="product-count">{cartLength}</span>}
      </button>
    </div>
  );
}

export default ShoppingNavFn;
