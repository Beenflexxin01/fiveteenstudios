import Footer from "../UI/Footer";
function Contact() {
  return (
    <>
      <div className="h1-margin">
        <h1 className="primary-header h1">CONTACT</h1>
      </div>
      <div className="login">
        <div className="form">
          <form>
            <ul className="form-ul form-contact">
              <li className="form-block">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input-contact-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input-contact-2"
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
                  name="text"
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
