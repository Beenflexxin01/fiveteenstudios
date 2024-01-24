import { useState } from "react";
import { NavLink } from "react-router-dom";
import OtherNavs from "./OtherNavs";

function NavBar({ cartCount, cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-ul">
          <div className="nav-bar">
            <div
              className={`burger ${isOpen && "open"} `}
              onClick={() => setIsOpen(!isOpen)}>
              <div className="burger_bar"></div>
              <div className="burger_bar bar"></div>
              <div className="burger_bar bar3"></div>
            </div>
            <div className={`burger-menu ${isOpen ? "open" : ""}`}>
              <li className="burger_class">
                <NavLink
                  to="/"
                  className="main-nav-link main-nav--link"
                  onClick={toggleOffMenuBar}>
                  <span>HOME</span>
                </NavLink>
              </li>

              <li className="burger_class">
                <NavLink
                  to="/products"
                  className="main-nav-link main-nav--link"
                  onClick={toggleOffMenuBar}>
                  <span>PRODUCTS</span>
                </NavLink>
              </li>

              <li className="burger_class">
                <NavLink
                  to="/story"
                  className="main-nav-link main-nav--link"
                  onClick={toggleOffMenuBar}>
                  <span>STORY</span>
                </NavLink>
              </li>

              <li className="burger_class">
                <NavLink
                  to="/blog"
                  className="main-nav-link main-nav--link"
                  onClick={toggleOffMenuBar}>
                  <span>JOURNAL</span>
                </NavLink>
              </li>

              <li className="burger_class">
                <NavLink
                  to="/contact"
                  className="main-nav-link main-nav--link"
                  onClick={toggleOffMenuBar}>
                  <span>CONTACT</span>
                </NavLink>
              </li>
            </div>
          </div>
          <OtherNavs cartCount={cartCount} cart={cart} setCart={setCart} />
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
