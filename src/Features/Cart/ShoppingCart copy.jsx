import { HiTrash, HiXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import QtyComponent from "../../UI/QtyComponent";

function ShoppingCart({
  visibility,
  products,
  onClose,
  onProductRemove,
  setProductCart,
  cart,
  setCart,
}) {
  const navigate = useNavigate();

  const totalQuantityInCart = products.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalProductPrice = products.reduce(
    (total, item) => total + item.total_price,
    0
  );

  return (
    <>
      <div
        className="modal"
        style={{ display: visibility ? "flex" : "none" }}
        key={products.title}>
        <div className="shopping-cart">
          <div className="header">
            <h2>Shopping Cart</h2>
            <button className="btn close-btn" onClick={onClose}>
              <HiXMark size={15}></HiXMark>
            </button>
          </div>
          <div className="cart--product" key={products}>
            {products.length === 0 && (
              <>
                <div className="empty-cart">
                  <h2 className="secondary-header ">Your cart is empty</h2>
                  <button className="btn checkout-btn">
                    <Link to="/products" className="cart-link">
                      Continue Shopping
                    </Link>
                  </button>
                </div>
              </>
            )}
            {products.map((product) => {
              return (
                <div className="cart_product ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product_img"
                  />
                  <div className="product-info">
                    <h3 className="product-header">{product.title}</h3>
                    <span className="product-price">{product.total_price}</span>
                  </div>
                  <QtyComponent
                    cart={cart}
                    setProductCart={setProductCart}
                    setCart={setCart}
                    products={products}
                    product={product}
                  />
                

                  <button
                    className="btn remove-btn"
                    onClick={() => onProductRemove(product)}>
                    <HiTrash size={20} />
                  </button>
                </div>
              );
            })}

            {products.length > 0 && (
              <>
                <div className="sub-total">
                  Total Items: {totalQuantityInCart} items
                </div>
                <div className="sub-total">
                  Total Price: ${totalProductPrice}
                </div>

                <button
                  className="btn checkout-btn"
                  onClick={() => navigate("/checkout")}>
                  Proceed to checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
