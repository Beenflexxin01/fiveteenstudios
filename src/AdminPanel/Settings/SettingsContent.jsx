function SettingsContent() {
  return (
    <>
      <div className="containr">
        <h1 className="dd">Settings</h1>
        <div className="form">
          <form
            action="
                        ">
            <div className="grid-2">
              <div className="settings-grid-2-cols">
                <nav className="form-nav">
                  <ul className="form-ul">
                    <li className="post-form-li">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="post-input"
                        required
                        placeholder=" e.g. John "
                      />
                    </li>

                    <li className="post-form-li">
                      <label htmlFor="firstName">Email</label>
                      <input
                        type="email"
                        className="post-input"
                        required
                        placeholder=" e.g. John@gmail.com "
                      />
                    </li>

                    <li className="post-form-li">
                      <label htmlFor="phone">Password</label>
                      <input
                        type="password"
                        className="post-input"
                        required
                        placeholder="Password"
                      />
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="settings-grid-2-cols">
                <nav className="form-nav">
                  <ul className="form-ul">
                    <li className="post-form-li">
                      <label htmlFor="firstName">Last Name</label>
                      <input
                        type="text"
                        className="post-input"
                        required
                        placeholder=" e.g. Doe "
                      />
                    </li>

                    <li className="post-form-li">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        className="post-input"
                        required
                        placeholder="+234 808393829"
                      />
                    </li>
                    <li className="post-form-li">
                      <label htmlFor="phone">Change Password</label>
                      <input
                        type="password"
                        className="post-input"
                        required
                        placeholder="Change Password"
                      />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="settings-grid-2-cols submit">
              <input type="submit" value="Update Profile" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SettingsContent;
