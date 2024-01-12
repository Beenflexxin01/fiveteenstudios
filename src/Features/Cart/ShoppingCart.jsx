import { HiTrash, HiXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import QtyComponent from "../../UI/QtyComponent";
import { useState } from "react";

function ShoppingCart({
  visibility,
  products,
  onClose,
  onProductRemove,
  onQuantityChange,
}) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const qtyNum = () => {
    setCount((count) => count + 1);
  };
  let totalCartPrice = 0;

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
          <div className="cart--product" key={products.id}>
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
              totalCartPrice += product.price * qtyNum;
              return (
                <div className="cart_product " key={products.title}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product_img"
                  />
                  <div className="product-info">
                    <h3 className="product-header">{product.title}</h3>
                    <span className="product-price">
                      {product.price * count}
                    </span>
                  </div>
                  <select
                    className="quantity"
                    value={product.qtyNum}
                    onChange={(event) =>
                      onQuantityChange(product.id, event.target.value)
                    }></select>
                  {/* <QtyComponent /> */}
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
                  <h4>Sub-total:</h4>
                  <span>{totalCartPrice}</span>
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
