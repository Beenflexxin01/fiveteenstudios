import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.avif";
import ShoppingCart from "../Features/Cart/ShoppingCart";
// import Button from "./Button";
import {
  HiMagnifyingGlass,
  HiOutlineLockOpen,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
function MainNav() {
  const [productInCart, setProductCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [cartVisibility, setCartVisibility] = useState(false);

  const onQuantityChange = (productid, count) => {
    setProductCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === productid);
      if (productIndex !== -1) {
        oldState[productIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProductCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }
      return [...oldState];
    });
  };

  useEffect(
    function () {
      localStorage.setItem("shopping-cart", JSON.stringify(productInCart));
    },
    [productInCart]
  );

  return (
    <>
      <div>
        <ShoppingCart
          visibility={cartVisibility}
          products={productInCart}
          onClose={() => setCartVisibility(false)}
          onQuantityChange={onQuantityChange}
          onProductRemove={onProductRemove}
        />
      </div>
      <nav className="main-nav">
        <ul className="main-nav-ul">
          <div className="div-nav">
            <li className="main-nav-li">
              <NavLink to="/" className="main-nav-link">
                <span>HOME</span>
              </NavLink>
            </li>

            <li className="main-nav-li">
              <NavLink to="/products" className="main-nav-link">
                <span>PRODUCTS</span>
              </NavLink>
            </li>

            <li className="main-nav-li">
              <NavLink to="/story" className="main-nav-link">
                <span>STORY</span>
              </NavLink>
            </li>

            <li className="main-nav-li">
              <NavLink to="/blog" className="main-nav-link">
                <span>JOURNAL</span>
              </NavLink>
            </li>

            <li className="main-nav-li">
              <NavLink to="/contact" className="main-nav-link">
                <span>CONTACT</span>
              </NavLink>
            </li>
            <button class="btn-mobile-nav">
              <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
              <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
            </button>
            {/* </ul> */}
          </div>
          {/* <ul className="main-nav-ul"> */}
          <li className="main-nav-li">
            <NavLink to="/" className="main-nav-link">
              <img src={logo} alt="fiveteen Logo" className="logo" />
            </NavLink>
          </li>

          <div className="others">
            <li className="main-nav-li">
              <NavLink to="/search" className="main-nav-link">
                <span>
                  <HiMagnifyingGlass className="icons" />
                </span>
              </NavLink>
            </li>

            <li className="main-nav-li">
              <NavLink to="/login" className="main-nav-link ">
                <span>
                  <HiOutlineLockOpen className="icons" />
                </span>
              </NavLink>
            </li>

            <li className="main-nav-li">
              <button
                onClick={() => setCartVisibility(true)}
                className="shop-btn">
                <HiOutlineShoppingBag className="icons" />
                {productInCart.length > 0 && (
                  <span className="product-count">{productInCart.length}</span>
                )}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
