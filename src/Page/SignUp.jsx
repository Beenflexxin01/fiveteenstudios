import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// import BackendLink from "../utils/BackendLink";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        // .post(`${BackendLink}/api/register`, { name, email, password })
        .post(`http://localhost:5000/api/register/`, { name, email, password })
        .then((result) => {
          navigate("/login");
          console.log(result);
        });
      toast.success(
        "User Account Successfully Created! You can now proceed to login"
      );
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  return (
    <>
      <div className="login">
        <h2 className="secondary-header h1">Create Account</h2>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <ul className="form-ul">
              <li className="form-li">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="input-contact-2"
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li className="form-li">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="input-contact-2"
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li className="form-li">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="input-contact-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="form-li">
                <input
                  type="text"
                  placeholder="Password"
                  required
                  className="input-contact-2"
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
            </ul>
            <button className="btn btn-view btn-sign-in ">create</button>
          </form>
        </div>
      </div>
      ;
    </>
  );
}

export default SignUp;
