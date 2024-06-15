import { useRef } from "react";
import Footer from "../UI/Footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      );
      toast.success(
        "Email successfully sent! We'll get back to you as soon as possible."
      );
    } catch (err) {
      toast.error(`${err}`);
    }
    e.target.reset();
  };

  return (
    <>
      <div className="h1-margin">
        <h1 className="primary-header h1">CONTACT</h1>
      </div>
      <div className="login">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <ul className="form-ul form-contact">
              <li className="form-block">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="input-contact-2"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="input-contact-2 input-email"
                />
              </li>

              <li className="form-li">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="input-contact"
                />
              </li>

              <li className="form-li">
                <textarea
                  name="message"
                  required
                  placeholder="Comment"
                  className="input-contact"></textarea>
              </li>
            </ul>
            <div className="form-btn">
              <button className=" btn-view  btn">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
