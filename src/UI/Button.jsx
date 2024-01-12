import QtyComponent from "./QtyComponent";

function Button({ addProductToCart, product }) {
  return (
    <>
      <div>
        <QtyComponent />
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
