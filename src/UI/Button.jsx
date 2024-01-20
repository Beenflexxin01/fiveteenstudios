import QtyComponent from "./QtyComponent";

function Button({ addProductToCart, product, cart, setCart }) {

  return (
    <>
      <QtyComponent cart={cart} setCart={setCart} />
    
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
    </>
  );
}

export default Button;
