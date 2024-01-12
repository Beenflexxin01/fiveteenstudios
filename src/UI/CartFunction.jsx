import { useEffect, useState } from "react";
import ShoppingCart from "../Features/Cart/ShoppingCart";
import Button from "./Button";
import toast from "react-hot-toast";

function CartFunction({ product }) {
  const [productInCart, setProductCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const [count] = useState(1);
  // const [reloader, setReloader] = useState(false);
  // const [cartVisibility, setCartVisibility] = useState(false);
  const addProductToCart = (products) => {
    const newProduct = {
      ...products,
      count: count,
    };
    setProductCart([...productInCart, newProduct]);
    // alert("Successfully added to cart");
    // setReloader(!reloader);
    toast.success("Items added to cart!");
    // window.location.reload();
  };

  useEffect(
    function () {
      localStorage.setItem("shopping-cart", JSON.stringify(productInCart));
    },
    [productInCart]
  );

  return (
    <div>
      <ShoppingCart products={productInCart} />
      <Button addProductToCart={addProductToCart} product={product} />
    </div>
  );
}

export default CartFunction;
