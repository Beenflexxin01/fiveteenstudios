import { NavLink } from "react-router-dom";
import logo from "../Images/logo.avif";
import {
  HiMagnifyingGlass,
  HiOutlineLockOpen,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-ul">
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
            <NavLink to="/cart" className="main-nav-link">
              <span>
                <HiOutlineShoppingBag className="icons" />
              </span>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default MainNav;
