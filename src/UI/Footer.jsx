import { NavLink } from "react-router-dom";
import discover from "../Images/discover.jfif";
import apple from "../Images/applepay.png";
import amex from "../Images/amex.png";
import master from "../Images/master.png";
import paypal from "../Images/paypal.png";
import visa from "../Images/visa.jfif";
function Footer() {
  return (
    <>
      <div className="collections  footer-section">
        <div className="footer">
          <p className="text-description ">
            We believe design should be easy to read and understand and we apply
            this philosophy to all of our pieces.
          </p>
          <span className="footer-icon">
            <NavLink to="https://www.facebook.com/fiveteenonline">
              <ion-icon name="logo-facebook"></ion-icon>
            </NavLink>
          </span>
          <span className="footer-icon">
            <NavLink to="https://www.facebook.com/fiveteenstudios">
              <ion-icon name="logo-instagram"></ion-icon>
            </NavLink>
          </span>
          <span className="footer-icon">
            <NavLink to="https://www.youtube.com/channel/UCDrpSFCSJaShTDNUAUuxoyg">
              <ion-icon name="logo-youtube"></ion-icon>
            </NavLink>
          </span>
          <h2 className="secondary-header">
            <strong>Join The Family</strong>
          </h2>
          <div className="input">
            <form>
              <input
                type="email"
                placeholder="Email"
                required
                className="input-contact-2"
              />
              <button className="input-btn">&rarr;</button>
            </form>
          </div>
        </div>
        <hr className="hr" />

        <div className="footer-nav footer-image">
          <ul className="footer-nav-ul">
            <li className="">
              <img src={amex} alt="" className="footer-img" />
            </li>
            <li className="">
              <img src={discover} alt="" className="footer-img" />
            </li>
            <li className="">
              <img src={apple} alt="" className="footer-img" />
            </li>
            <li className="">
              <img src={master} alt="" className="footer-img" />
            </li>
            <li className="">
              <img src={paypal} alt="" className="footer-img" />
            </li>
            <li className="">
              <img src={visa} alt="" className="footer-img" />
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <ul className="footer-nav-ul">
            <li className="footer-nav-li">
              <span className="nav-link">&copy; 2023, </span>
              <NavLink to="https://fiveteenstudios.com" className="nav-link">
                <span>Fivteen Studios</span>
              </NavLink>
            </li>

            <li className="footer-nav-li">
              <NavLink
                to="https://fiveteenstudios.com/policies/refund-policy"
                className="nav-link">
                <span>Refund Policy</span>
              </NavLink>
            </li>

            <li className="footer-nav-li">
              <NavLink
                to="https://fiveteenstudios.com/policies/privacy-policy"
                className="nav-link">
                <span>Privacy Policy</span>
              </NavLink>
            </li>

            <li className="footer-nav-li">
              <NavLink
                to="https://fiveteenstudios.com/policies/terms-of-service"
                className="nav-link">
                <span>Terms of Service</span>
              </NavLink>
            </li>

            <li className="footer-nav-li">
              <NavLink
                to="https://fiveteenstudios.com/policies/shipping-policy"
                className="nav-link">
                <span>Shipping Policy</span>
              </NavLink>
            </li>

            <li className="footer-nav-li">
              <NavLink
                to="https://fiveteenstudios.com/policies/contatc-information"
                className="nav-link">
                <span>Contact Information</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
