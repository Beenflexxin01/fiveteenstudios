import { Link } from "react-router-dom";
import f48 from "../../Images/f48.jpeg";
import f7 from "../../Images/f7.jpeg";
import f50 from "../../Images/f50.jpeg";
import f52 from "../../Images/f52.jpeg";
import f51 from "../../Images/f51.jpeg";
import f53 from "../../Images/f53.jpeg";
import f54 from "../../Images/f54.jpeg";
function Designs() {
  return (
    <>
      <div className="container design-container">
        <h1 className="primary-header h1">Designs</h1>
        <div className="grid-2">
          <div className="grid-2_cols">
            <Link to="/blogs/designs" className="design-link">
              <div className="grid-underline">
                <img src={f48} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">PALMS BLANC</h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 22, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                Palms symbolize serenity, freedom, and unwavering strength, akin
                to nature's eternal witnesses. The Design: Our design proudly
                displays the phrase "palms see everything" on the front,
                accompanied by a...
              </p>
            </Link>
          </div>
          <div className="grid-2_cols">
            <Link to="" className="design-link">
              <div className="grid-underline">
                <img src={f7} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">COZY SZN</h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 22, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                When the sun begins to shy away, leaves transition into a
                beautiful array of colors, and the air turns crisp and chilly,
                it;s a sure sign that we're entering the...
              </p>
            </Link>
          </div>
          <div className="grid-2_cols">
            <Link to="" className="design-link">
              <div className="grid-underline">
                <img src={f54} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">
                  SAC a DOS - Our First Mobile Hoodie
                </h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 21, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                "SAC a DOS" - Introducing the BCKPAK, Our Innovative Mobile
                Hoodie! Our creation, SAC A DOS, bings together style and
                functionality like never before, redifining the concept of
                apparel. A...
              </p>
            </Link>
          </div>
          <div className="grid-2_cols">
            <Link to="" className="design-link">
              <div className="grid-underline">
                <img src={f50} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">FVT CTY</h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 21, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                Our identity is intrinsically tied to our origins and the places
                we connect with most profoundly. These locations influence our
                thoughts, creativity an ultimately the individuals we become.
                The Design:...
              </p>
            </Link>
          </div>
          <div className="grid-2_cols">
            <Link to="" className="design-link">
              <div className="grid-underline">
                <img src={f52} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">FVT CLASSIC</h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 21, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                This is the ultimate representation of FIVETEEN - a piece that
                stands alone in its uniqueness. The Design: This design
                elegantly showcases 'FIVETEEN' in a timeless college font,
                seamlessly blending...
              </p>
            </Link>
          </div>

          <div className="grid-2_cols">
            <Link to="" className="design-link">
              <div className="grid-underline">
                <img src={f51} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">XVT PALMS</h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 21, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                This design showcase a captivating picture of palm trees against
                the backdrop of Lagos. This particular piece served as the
                catalyst for the "Palms" movement that became evident in
                subsequent...
              </p>
            </Link>
          </div>

          <div className="grid-2_cols">
            <Link to="" className="design-link">
              <div className="grid-underline">
                <img src={f53} alt="" className="grid-2-image" />
                <h2 className="secondary-header h2">SLPLS NGTS</h2>
              </div>
              <div className="design-div">
                <p className="text-descriptions">
                  <strong>SEPTEMBER 21, 2023</strong>
                </p>
                <li className="text-descriptions list">FEYI FAKOLADE</li>
              </div>
              <p className="text-description design-text">
                Freedom doesn't come early. This piece connects all of us and
                reminds us to celebrate all the people endlessly working towards
                their goals. The Design: This design incorporates several
                features...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Designs;
