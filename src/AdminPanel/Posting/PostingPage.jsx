function PostingPage() {
  return (
    <>
      <div className="containr">
        <h1 className="dd">Add Products</h1>

        <form action="" className="forrr">
          <div className="grid-2">
            <div className="posting-grid-2-cols">
              <div className="form">
                <nav className="form-nav">
                  <ul className="form-ul">
                    <li className="form-li post-form-li">
                      <label htmlFor="name">
                        Product Name <span>*</span>
                      </label>

                      <input
                        type="name"
                        className="input post-input"
                        required
                        placeholder="Enter Product Name"
                        min="5"
                        max="25"
                      />
                    </li>

                    <li className="form-li post-form-li">
                      <label htmlFor="name">
                        Product Price <span>*</span>
                      </label>
                      <input
                        type="number"
                        className="post-input"
                        required
                        placeholder="Enter Product Price"
                      />
                    </li>

                    <li className="form-li post-form-li">
                      <label htmlFor="message">
                        Description <span>*</span>
                      </label>
                      <textarea
                        name="message"
                        id=""
                        className="post-input"
                        placeholder="Description"
                      />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="posting-grid-2-cols">
              <div className="form">
                <nav className="form-nav">
                  <ul className="form-ul">
                    <li className="form-li post-form-li">
                      <label htmlFor="name">
                        Upload Product Image <span>*</span>
                      </label>
                      <input
                        type="file"
                        className="input post-input"
                        required
                      />
                    </li>

                    <li className="form-li post-form-li">
                      <label htmlFor="select">
                        Add Size <span>*</span>
                      </label>
                      <select name="select" id="" className="post-input">
                        <option value="M">-- select --</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                      </select>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="submit-btn">
            <input type="submit" value="submit" className=" submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default PostingPage;
