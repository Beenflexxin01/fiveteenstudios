import { toast } from "react-toastify";
import Button from "./Button";
function CartFunction({ product, cart, setCart }) {
  const addProductToCart = (product) => {
    const existingProduct = cart.findIndex(
      (item) => item.title === product.title
    );
    if (existingProduct !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingProduct].quantity < 10) {
        updatedCart[existingProduct].quantity++;
        updatedCart[existingProduct].total_price =
          updatedCart[existingProduct].quantity *
          updatedCart[existingProduct].price;
        setCart(updatedCart);
        toast.success(`${product.title} added to the cart`);
      } else {
        console.log(
          `Maximum quantity reached for ${product}! You can only make purchase for 10 quantities at a go!`
        );
        toast.warn(
          `Maximum quantity reached for ${product}! You can only make purchase for 10 quantities at a go!`
        );
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
      toast.success(`${product.title} added to the cart`);
    }
    console.log(cart);
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
    }
  };

  return (
    <div>
      <Button
        addProductToCart={addProductToCart}
        cart={cart}
        setCart={setCart}
        handleDecreament={handleDecreament}
        handleIncreament={handleIncreament}
        product={product} //Added to addToCart function in button component
      />
    </div>
  );
}

export default CartFunction;
