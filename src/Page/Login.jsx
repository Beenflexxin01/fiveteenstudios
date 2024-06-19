import { Link, useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        // .post(`${BackendLink}/api/register`, { name, email, password })
        .post(`http://localhost:5000/api/login/`, { email, password })
        .then((result) => {
          navigate("/home");
          console.log(result);
        });
      toast.success("User Successfully Logged In!");
    } catch (err) {
      toast.error(`${err}`);
    }
  };
  return (
    <>
      <div className="login">
        <h1 className="primary-header h1">LOGIN</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <ul className="form-ul">
              <li className="form-li">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="input-contact-2"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
