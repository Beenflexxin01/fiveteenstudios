import { Link } from "react-router-dom";

function PasswordReset() {
  return (
    <>
      <div className="login">
        <h2 className="secondary-header h1">Reset your Password</h2>
        <p className="text-description">
          We will send you an email to reset your password
        </p>
        <div className="form">
          <form action="">
            <ul className="form-ul">
              <li className="form-li">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="input-contact-2"
                />
              </li>
            </ul>
            <button className="btn btn-view btn-sign-in">Submit</button>
          </form>
        </div>
        <Link to="/login" className="text-description">Cancel</Link>
      </div>
    </>
  );
}

export default PasswordReset;
