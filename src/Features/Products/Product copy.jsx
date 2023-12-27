import { Link } from "react-router-dom";
import f15 from "../../Images/f15.jpeg";
import f22 from "../../Images/f22.jpeg";
import f3 from "../../Images/f3.jpeg";
import f34 from "../../Images/f34.jpeg";
import f7 from "../../Images/f7.jpeg";
import f9 from "../../Images/f9.jpeg";
import f39 from "../../Images/f39.jpeg";
import f48 from "../../Images/f48.jpeg";
import f40 from "../../Images/f40.jpeg";
import f41 from "../../Images/f41.jpeg";
import f42 from "../../Images/f42.jpeg";
import f43 from "../../Images/f43.jpeg";
import f44 from "../../Images/f44.jpeg";
import f45 from "../../Images/f45.jpeg";
import f46 from "../../Images/f46.jpeg";
import f47 from "../../Images/f47.jpeg";
import { HiOutlineChevronDown } from "react-icons/hi2";

function Products() {
  return (
    <>
      <div className="container">
        <h1 className="primary-header h1">Products</h1>

        <div className="filters">
          <ul className="filter-ul">
            <div className="filter">
              <li className="filter-li">Filter:</li>
              <li className="filter-li">
                <Link to="" className="link">
                  <span>Availablity</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
              <li className="filter-li">
                <Link to="" className="link">
                  <span>Price</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
            </div>
            <div className="sort">
              <li className="filter-li">Sort By:</li>

              <li className="filter-li">
                <Link to="" className="link">
                  <span>Alphabetically, A - Z</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>

              <li className="filter-li">
                <Link to="" className="link">
                  <span>Price</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="grid-4">
          <div className="grid-4-cols">
            <Link to="/productPage" className="nav-link">
              <img src={f22} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>COZY SZN</strong>
                </p>
                <p className="text-description">$60.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="/productPage" className="nav-link">
              <img src={f34} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>FREEDOM (LIMITED EDITION)</strong>
                </p>
                <p className="text-description">$42.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="/productPage" className="nav-link">
              <img src={f3} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>SLPLS NIGHTS</strong>
                </p>
                <p className="text-description">$25.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f15} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>TERRA ORANGE</strong>
                </p>
                <p className="text-description">$38.00USD</p>
              </div>
            </Link>
          </div>
          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f7} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>COZY SZN</strong>
                </p>
                <p className="text-description">$55.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f9} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>FVT CLASSIC</strong>
                </p>
                <p className="text-description">$28.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f39} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>PSE SHORTS</strong>
                </p>
                <p className="text-description">$30.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f48} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>PALMS BLANC</strong>
                </p>
                <p className="text-description">$38.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f40} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>FVT LAGOS</strong>
                </p>
                <p className="text-description">$28.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f43} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>XV PALMS</strong>
                </p>
                <p className="text-description">$30.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f42} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>XV PALMS</strong>
                </p>
                <p className="text-description">$30.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f41} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>XV SWEATPANTS</strong>
                </p>
                <p className="text-description">$48.00USD</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid-4">
          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f44} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>TERA ORANGE</strong>
                </p>
                <p className="text-description">$38.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f45} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>SAC a DOS</strong>
                </p>
                <p className="text-description">$64.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f46} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>XMILEY TOTE</strong>
                </p>
                <p className="text-description">$28.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f47} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>PSE SHORTS MINI</strong>
                </p>
                <p className="text-description">$30.00USD</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
