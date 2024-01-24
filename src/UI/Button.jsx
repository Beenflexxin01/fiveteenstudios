function Button({
  addProductToCart,
  product,
  cart,
  handleIncreament,
  handleDecreament,
}) {
  return (
    <>
      <div className="quantity">
        <button
          className="quantity-btn"
          onClick={() => handleDecreament(product.title)}>
          -
        </button>
        <div className="form-control text-center">{cart.quantity}</div>

        <button
          className="quantity-btn"
          onClick={() => handleIncreament(product.title)}>
          +
        </button>
      </div>

      <div className="btn-div">
        <button
          className="btn btn-cart"
          onClick={() => addProductToCart(product)}>
          Add to cart
        </button>
        <button className="paypal btn-pay">
          <span className="buy">Buy with</span>
          <span className="span">Pay</span>
          <span className="span-pal">Pal</span>
        </button>
      </div>
    </>
  );
}

export default Button;
