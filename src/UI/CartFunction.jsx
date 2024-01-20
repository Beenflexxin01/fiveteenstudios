import Button from "./Button";
import { toast } from "react-toastify";
function CartFunction({ product, cart, setCart }) {
  const addProductToCart = (product) => {
    const existingProduct = cart.findIndex(
      (item) => item.title === product.title
    );
    if (existingProduct !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingProduct].quantity < 10) {
        updatedCart[existingProduct].quantity += 1;
        updatedCart[existingProduct].total_price =
          updatedCart[existingProduct].quantity *
          updatedCart[existingProduct].price;
        setCart(updatedCart);
      } else {
        console.log(
          `Maximum quantity reached for ${product}! You can only make purchase for 10 quantities at a go!`
        );
        toast.success(`${product.title} added to the cart`);
      }
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
          total_price: product.price,
        },
      ]);
    }
    console.log(cart);
  };

  return (
    <div>
      <Button
        addProductToCart={addProductToCart}
        cart={cart}
        setCart={setCart}
        product={product} //Added to addToCart function in button component
      />
    </div>
  );
}

export default CartFunction;
