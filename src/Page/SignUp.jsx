function SignUp() {
  return (
    <>
      <div className="login">
        <h2 className="secondary-header h1">Create Account</h2>
        <div className="form">
          <form action="">
            <ul className="form-ul">
              <li className="form-li">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="input-contact-2"
                />
              </li>
              <li className="form-li">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="input-contact-2"
                />
              </li>
              <li className="form-li">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="input-contact-2"
                />
              </li>
              <li className="form-li">
                <input
                  type="text"
                  placeholder="Password"
                  required
                  className="input-contact-2"
                  minLength={8}
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
