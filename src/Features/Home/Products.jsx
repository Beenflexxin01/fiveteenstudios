import { NavLink } from "react-router-dom";
import f15 from "../../Images/f15.jpeg";
import f22 from "../../Images/f22.jpeg";
import f3 from "../../Images/f3.jpeg";
import f34 from "../../Images/f34.jpeg";

function Products() {
  return (
    <>
      <div className="container">
        <h2 className="secondary-header">FEATURED PRODUCTS</h2>
        <div className="grid-4">
          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f22} alt="" className="grid-4-image" />

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
              <img src={f34} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>FREEDOM (LIMITED EDITION)</strong>
                </p>
                <p className="text-description">$42.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f3} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>SLPLS NIGHTS</strong>
                </p>
                <p className="text-description">$25.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f15} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>TERRA ORANGE</strong>
                </p>
                <p className="text-description">$38.00USD</p>
              </div>
            </NavLink>
          </div>
        </div>
        <button className="btn btn-view ">View All</button>

        <div className="romans">
          <p className="text-description">
            Ever wonder why five comes after four but not fiveteen after
            fourteen?
          </p>
          <p className="text-description">
            The brand namee Fiveteen is from the Latin XV (quin decim) which
            directly translates to fiveteen.
          </p>
          <p className="text-description">
            Tired of following the norm? We are too. Here at Fiveteen, we're
            designing products that don't just look good, but also provide
            feelings and sensations past just the visual
          </p>
        </div>
      </div>
    </>
  );
}

export default Products;
