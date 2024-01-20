// import { useState } from "react";

function QtyComponent({ cart, setCart }) {
  // const [quantity, setQuantity] = useState(1);

  const handleIncreament = (productName) => {
    const productIndex = cart.findIndex((item) => item.title === productName);

    if (productIndex !== 1) {
      const updatedproducts = [...cart];
      if (updatedproducts[productIndex].quantity < 15) {
        updatedproducts[productIndex].quantity++;
        updatedproducts[productIndex].total_price =
          updatedproducts[productIndex].quantity *
          updatedproducts[productIndex].price;
        setCart(updatedproducts);
      } else {
        console.log(
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
      } else {
        console.log(
          `Minimum quantity reached for ${productName}... Kindly hit the delete button to completely remove it from cart.`
        );
      }
    }
  };

  // const handleIncreament = () => {
  //   if (quantity < 10) {
  //     setCart((prevCount) => prevCount + 1);
  //   }
  // };
  // const handleDecreament = () => {
  //   if (quantity > 1) {
  //     setCart((prevCount) => prevCount - 1);
  //   }
  // };
  return (
    <>
      {cart &&
        cart.map((item, index) => (
          <div className="quantity" key={index}>
            <button
              className="quantity-btn"
              onClick={() => handleDecreament(item.title)}>
              -
            </button>
            <div className="form-control text-center">{item.quantity}</div>
            <button
              className="quantity-btn"
              onClick={() => handleIncreament(item.title)}>
              +
            </button>
          </div>
        ))}
      {/* 
      <div className="quantity">
        <button className="quantity-btn " onClick={handleDecreament}>
          -
        </button>
        <div className="form-control text-center">{quantity}</div>
        <button className="quantity-btn " onClick={handleIncreament}>
          +
        </button>
      </div> */}
    </>
  );
}

export default QtyComponent;
