import { useEffect, useState } from "react";
import ShoppingCart from "../Features/Cart/ShoppingCart";
import Button from "./Button";

function CartFunction({ product }) {
  const [productInCart, setProductCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [cartVisibility, setCartVisibility] = useState(false);

  const addProductToCart = (products) => {
    const newProduct = {
      ...products,
      count: 1,
    };
    // console.log(products);
    console.log(newProduct);
    setProductCart([...productInCart, newProduct]);
    console.log(productInCart);
  };

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

      <Button addProductToCart={addProductToCart} product={product} />
    </div>
  );
}

export default CartFunction;
