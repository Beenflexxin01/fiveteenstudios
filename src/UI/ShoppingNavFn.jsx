import { useEffect, useState } from "react";
import ShoppingCart from "../Features/Cart/ShoppingCart";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function ShoppingNavFn() {
  const [productInCart, setProductCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [cartVisibility, setCartVisibility] = useState(false);

  const onQuantityChange = (productid, count) => {
    setProductCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === productid);
      if (productIndex !== -1) {
        oldState[productIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProductCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }
      return [...oldState];
    });
  };

  useEffect(
    function () {
      localStorage.setItem("shopping-cart", JSON.stringify(productInCart));
    },
    [productInCart]
  );
  return (
    <div>
      <ShoppingCart
        visibility={cartVisibility}
        products={productInCart}
        onClose={() => setCartVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />

      <button onClick={() => setCartVisibility(true)} className="shop-btn">
        <HiOutlineShoppingBag className="icons" />
        {productInCart.length > 0 && (
          <span className="product-count">{productInCart.length}</span>
        )}
      </button>
    </div>
  );
}

export default ShoppingNavFn;
