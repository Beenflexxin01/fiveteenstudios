import { NavLink } from "react-router-dom";
import discover from "../Images/discover.jfif";
import apple from "../Images/applepay.png";
import amex from "../Images/amex.png";
import master from "../Images/master.png";
import paypal from "../Images/paypal.png";
import visa from "../Images/visa.jfif";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Footer() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        // import.meta.env.VITE_SUB_EMAIL
        import.meta.env.VITE_EMAILJS_PUBLIC

      );
      toast.success(
        "Welcome to the family! You have successfully subscribed to our newsletter!"
      );
    } catch (err) {
      toast.error(`${err}`);
      console.log(err.message);
    }

    e.target.reset();
  };
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
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                placeholder="Email"
                required
                className="footer-form"
              />
              <button className="input-btn">&rarr;</button>
            </form>
          </div>
        </div>
        <hr className="hr" />

        <div className="footer-nav footer-image">
          <ul className="footer-nav-ul fot-img">
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
          <ul className="footer-nav-ul fot">
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
