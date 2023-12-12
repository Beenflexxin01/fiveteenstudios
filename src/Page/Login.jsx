import { Link } from "react-router-dom";
import Footer from "../UI/Footer";
function Login() {
  return (
    <>
      <div className="login">
        <h1 className="primary-header h1">LOGIN</h1>
        <div className="form">
          <form>
            <ul className="form-ul">
              <li className="form-li">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="input-contact-2"
                />
              </li>
              <li className="form-li">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="input-contact-2"
                />
              </li>
            </ul>
            <Link to="/account/recover" className=" link">
              <p className="text-description line pword">
                Forgot your Password?
              </p>
            </Link>
            <button className="btn-sign-in btn-view btn">Sign in</button>
            <Link to="/account/register" className="link ">
              <p className="text-description line">Create Account</p>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
