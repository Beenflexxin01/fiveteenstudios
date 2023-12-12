import { NavLink } from "react-router-dom";
import f7 from "../Images/f7.jpeg";
import f22 from "../Images/f22.jpeg";
import f41 from "../Images/f41.jpeg";
import f45 from "../Images/f45.jpeg";
import { HiOutlineChevronDown } from "react-icons/hi2";

function Products() {
  return (
    <>
      <div className="container">
        <h1 className="primary-header h1">A/W</h1>
        <p className="secondary-header ">Autumn/Winter Collection.</p>
        <div className="filters">
          <ul className="filter-ul">
            <div className="filter">
              <li className="filter-li">Filter:</li>
              <li className="filter-li">
                <NavLink to="" className="link">
                  <span>Availablity</span>
                  <HiOutlineChevronDown />
                </NavLink>
              </li>
              <li className="filter-li">
                <NavLink to="" className="link">
                  <span>Price</span>
                  <HiOutlineChevronDown />
                </NavLink>
              </li>
            </div>
            <div className="sort">
              <li className="filter-li">Sort By:</li>

              <li className="filter-li">
                <NavLink to="" className="link">
                  <span>Alphabetically, A - Z</span>
                  <HiOutlineChevronDown />
                </NavLink>
              </li>

              <li className="filter-li">X products</li>
            </div>
          </ul>
        </div>
        <div className="grid-4">
          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <div className="hidden">
                <img src={f22} alt="" className="grid-4-image" />
              </div>

              <div className="text-align">
                <p className="text-description">
                  <strong>COZY SZN</strong>
                </p>
                <p className="text-description">$60.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <div className="hidden">
                <img src={f45} alt="" className="grid-4-image" />
              </div>

              <div className="text-align">
                <p className="text-description">
                  <strong>SAC a DOS</strong>
                </p>
                <p className="text-description">$64.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <div className="hidden">
                <img src={f41} alt="" className="grid-4-image" />
              </div>

              <div className="text-align">
                <p className="text-description ">
                  <strong>XV SWEATPANTS</strong>
                </p>
                <p className="text-description">$48.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <div className="hidden">
                <img src={f7} alt="" className="grid-4-image" />
              </div>

              <div className="text-align">
                <p className="text-description">
                  <strong>COZY SZN</strong>
                </p>
                <p className="text-description">$55.00USD</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
