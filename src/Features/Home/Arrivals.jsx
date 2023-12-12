import ReactPlayer from "react-player";

import f15 from "../../Images/f15.jpeg";
import f22 from "../../Images/f22.jpeg";
import f3 from "../../Images/f3.jpeg";
import f6 from "../../Images/f6.jpeg";
import f27 from "../../Images/f27.jpeg";
import f39 from "../../Images/f39.jpeg";
import f34 from "../../Images/f34.jpeg";
import f35 from "../../Images/f35.jpeg";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
const VIDEO_PATH = "https://www.youtube.com/watch?v=o-Mgx_XLqYM&themeRefresh=1";
// const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

function Arrivals() {
  const playerRef = useRef(null);
  return (
    <>
      <div className="container">
        <h2 className="secondary-header">NEW ARRIVALS</h2>
        <div className="grid-4">
          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <div className="hidden">
                <img src={f22} alt="" className="grid-4-image" />
                <div className="hidden-img">
                  <img src={f27} alt="" className="grid-4-image" />
                </div>
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
                <img src={f34} alt="" className="grid-4-image" />
                <div className="hidden-img">
                  <img src={f35} alt="" className="grid-4-image" />
                </div>
              </div>

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
              <div className="hidden">
                <img src={f3} alt="" className="grid-4-image" />
                <div className="hidden-img">
                  <img src={f6} alt="" className="grid-4-image" />
                </div>
              </div>

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
              <div className="hidden">
                <img src={f15} alt="" className="grid-4-image" />
                <div className="hidden-img">
                  <img src={f39} alt="" className="grid-4-image" />
                </div>
              </div>

              <div className="text-align">
                <p className="text-description ">
                  <strong>TERRA ORANGE</strong>
                </p>
                <p className="text-description">$38.00USD</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="video">
          <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
      </div>
    </>
  );
}

export default Arrivals;
