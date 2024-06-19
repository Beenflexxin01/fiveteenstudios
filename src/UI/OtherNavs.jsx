import { NavLink } from "react-router-dom";
// import logo from "./Images/logo.avif";
import logo from "/Images/logo.avif";
import { HiMagnifyingGlass, HiOutlineLockOpen } from "react-icons/hi2";
import ShoppingNavFn from "./ShoppingNavFn";
function OtherNavs({ cartCount, cart, setCart }) {
  return (
    <>
      <li className="burger_class">
        <NavLink to="/" className="main-nav-link ">
          <img src={logo} alt="fiveteen Logo" className="logo" />
        </NavLink>
      </li>

      <div className="others">
        <li className="burger_class">
          <NavLink to="/admin" className="main-nav-link main-nav--link other-nav">
            Admin
          </NavLink>
        </li>
        <li className="burger_class">
          <NavLink to="#" className="main-nav-link main-nav--link other-nav">
            <span>
              <HiMagnifyingGlass className="icons" />
            </span>
          </NavLink>
        </li>

        <li className="burger_class">
          <NavLink to="/login" className="main-nav-link main-nav--link other-nav ">
            <span>
              <HiOutlineLockOpen className="icons" />
            </span>
          </NavLink>
        </li>

        <li className="burger_class">
          <ShoppingNavFn cartCount={cartCount} cart={cart} setCart={setCart} />
        </li>
      </div>
    </>
  );
}

export default OtherNavs;
