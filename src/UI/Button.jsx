import { useState } from "react";

function Button({ addProductToCart, product }) {
  // const [productInCart, setProductCart] = useState(
  //   JSON.parse(localStorage.getItem("shopping-cart")) || []
  // );
  // const handleIncreament = function (product_id) {
  //   setProductCart((product) => {
  //     product.map((item) => {
  //       return product_id === item.id
  //         ? {
  //             ...item,
  //             product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0),
  //           }
  //         : item;
  //     });
  //   });
  // };
  // const handleDecrement = function (product_id) {
  //   setProductCart((product) => {
  //     product.map((item) => {
  //       return product_id === item.id
  //         ? {
  //             ...item,
  //             product_qty: item.product_qty - (item.product_qty > 1 ? 1 : 0),
  //           }
  //         : item;
  //     });
  //   });
  // };
  return (
    <>
      <div>
        <div className="quantity product-size">
          <button className="quantity-btn ">-</button>
          <p className="text-description">1</p>
          <button className="quantity-btn ">+</button>
          {/* <button
            className="quantity-btn "
            onClick={() => handleDecrement(product.id)}>
            -
          </button>
          <p className="text-description">1</p>
          <button
            className="quantity-btn "
            onClick={() => handleIncreament(product.id)}>
            +
          </button> */}
        </div>
        <div className="btn-div">
          <button
            className="btn btn-cart"
            onClick={() => addProductToCart(product)}>
            Add to cart
          </button>
          <button className="paypal btn-pay">
            <span className="buy">Buy with</span>{" "}
            <span className="span">Pay</span>
            <span className="span-pal">Pal</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
