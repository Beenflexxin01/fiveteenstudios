import { useState } from "react";
import ShoppingCart from "../Features/Cart/ShoppingCart";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { toast } from "react-toastify";

function ShoppingNavFn({ cartCount, setCart, cart }) {
  const [cartVisibility, setCartVisibility] = useState(false);

  const cartLength = cartCount;

  const onProductRemove = (product) => {
    setCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }
      return [...oldState];
    });
    toast.success(`${product.title} successfully deleted!`);
  };

  const handleIncreament = (productName) => {
    const productIndex = cart.findIndex((item) => item.title === productName);

    if (productIndex !== 1) {
      const updatedproducts = [...cart];
      if (updatedproducts[productIndex].quantity < 10) {
        updatedproducts[productIndex].quantity++;
        updatedproducts[productIndex].total_price =
          updatedproducts[productIndex].quantity *
          updatedproducts[productIndex].price;
        setCart(updatedproducts);
        toast.success(`Quantity increased for ${productName}.`);
      } else {
        toast.warn(
          `Maximum quantity reached for ${productName}! You can only make purchase for 10 quantities at a go!`
        );
      }
    }
  };

  const handleDecreament = (productName) => {
    const productIndex = cart.findIndex((item) => item.title === productName);
    if (productIndex !== -1) {
      const updatedproducts = [...cart];
      if (updatedproducts[productIndex].quantity > 1) {
        updatedproducts[productIndex].quantity -= 1;
        updatedproducts[productIndex].total_price =
          updatedproducts[productIndex].quantity *
          updatedproducts[productIndex].price;
        setCart(updatedproducts);
        toast.success(`Quantity Decreased for ${productName}.`);
      } else {
        toast.warn(`Minimum quantity reached for ${productName}! `);
      }
    } else {
      console.error(`${productName} not found in the cart`);
    }
  };

  return (
    <div>
      <ShoppingCart
        visibility={cartVisibility}
        cart={cart}
        setCart={setCart}
        onClose={() => setCartVisibility(false)}
        onProductRemove={onProductRemove}
        handleDecreament={handleDecreament}
        handleIncreament={handleIncreament}
      />

      <button onClick={() => setCartVisibility(true)} className="shop-btn">
        <HiOutlineShoppingBag className="icons" />
        {cartLength > 0 && <span className="product-count">{cartLength}</span>}
      </button>
    </div>
  );
}

export default ShoppingNavFn;
