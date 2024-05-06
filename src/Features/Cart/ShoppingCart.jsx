import { HiTrash, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import PayBtn from "../../UI/PayBtn";
function ShoppingCart({
  visibility,
  cart,
  onProductRemove,
  onClose,
  handleIncreament,
  handleDecreament,
}) {
  // const navigate = useNavigate();

  const totalQuantityInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalProductPrice = cart.reduce(
    (total, item) => total + item.total_price,
    0
  );

  return (
    <div
      className="modal"
      style={{ display: visibility ? "flex" : "none" }}
      key={cart.title}>
      <div className="shopping-cart">
        <div className="header">
          <h2>Shopping Cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <HiXMark size={15}></HiXMark>
          </button>
        </div>
        <div className="cart--product" key={cart.id}>
          {cart.length === 0 && (
            <>
              <div className="empty-cart">
                <h2 className="secondary-header ">Your cart is empty</h2>
                <button className="btn checkout-btn">
                  <Link to="/cart" className="cart-link">
                    Continue Shopping
                  </Link>
                </button>
              </div>
            </>
          )}
          {cart.map((product) => {
            return (
              <div className="cart_product " key={cart.title}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product_img"
                />
                <div className="product-info">
                  <h3 className="product-header">{product.title}</h3>
                  <span className="product-price">
                    ${product.total_price}.00 USD
                  </span>
                </div>

                <div className="quantity" key={product.title}>
                  <button
                    className="quantity-btn"
                    onClick={() => handleDecreament(product.title)}>
                    -
                  </button>
                  <div className="form-control text-center">
                    {product.quantity}
                  </div>
                  <button
                    className="quantity-btn"
                    onClick={() => handleIncreament(product.title)}>
                    +
                  </button>
                </div>
                <button
                  className="btn remove-btn"
                  onClick={() => onProductRemove(product)}>
                  <HiTrash size={20} />
                </button>
              </div>
            );
          })}
          {cart.length > 0 && (
            <>
              <div className="total">
                <div className="sub-total">
                  Total Items: {totalQuantityInCart} items
                </div>
                <div className="sub-total">
                  Total Price: ${totalProductPrice}.00 USD
                </div>

                {/* <button
                  className="btn checkout-btn"
                  onClick={() => navigate("/checkout")}>
                  Proceed to checkout
                </button> */}
                <PayBtn cart={cart} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
