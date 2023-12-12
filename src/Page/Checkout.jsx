import { HiShoppingBag } from "react-icons/hi2";
import logo from "../Images/logo2.jfif";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <>
      <div className="others checkout">
        <Link to="/home">
          <img src={logo} alt="fiveteen-logo" className="checkout-logo" />
        </Link>

        <Link to="/cart">
          <HiShoppingBag className="icons checkout-icon" />
        </Link>
      </div>

      <div className="grid-2 grid-checkout">
        <div className="grid-2-cols checkout-grid checkout-grid-scroll">
          <div className="login checkout--">
            <p className="text-description">Express checkout</p>
            <Link to="product" className="cart-link">
              <button className="paypal">
                <span className="span">Pay</span>
                <span className="span-pal">Pal</span>
              </button>
            </Link>
          </div>
          <div className="contact-link">
            <h2 className="secondary-header">Contact</h2>
            <p className="text-description">
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <div className="form">
            <form action="">
              <ul className="form-ul">
                <li className="form-li form-checkout">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-checkout"
                  />
                </li>
                <li className="form-li form-checkout">
                  <input type="checkbox" required className="check-box" />
                  <label htmlFor="checkbox" className="text-description">
                    Email me with news and offers
                  </label>
                </li>
              </ul>
            </form>

            <div className="contact-link">
              <h2 className="secondary-header">Delivery</h2>
            </div>
            <div className="form">
              <form action="">
                <ul className="form-ul">
                  <li className="form-li">
                    <select
                      name="Nigeria"
                      id="Nigeria"
                      placeholder="Country / Region"
                      className="input-checkout">
                      <option
                        value="Country / Region"
                        className="text-description">
                        Select Country / Region
                      </option>
                      <option value="">Afghanistan</option>
                      <option value="">Albania</option>
                      <option value="">Algeria</option>
                      <option value="">American Samoa</option>
                      <option value="">Andorra</option>
                      <option value="">Angola</option>
                      <option value="">Anguilla</option>
                      <option value="">Antartica</option>
                      <option value="">Antigua and Barbuda</option>
                      <option value="">Argentina</option>
                      <option value="">Armenia</option>
                      <option value="">Aruba</option>
                      <option value="">Asia/Pacific Region</option>
                      <option value="">Australia</option>
                      <option value="">Austria</option>
                      <option value="">Azerbaijan</option>
                      <option value="">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="">Bangladesh</option>
                      <option value="">Barbados</option>
                      <option value="">Belarus</option>
                      <option value=""></option>
                      <option value="">Belgium</option>
                      <option value="b">Belize</option>
                      <option value="">Benin</option>
                      <option value="">Bermuda</option>
                      <option value="">Bhutan</option>
                      <option value="">Bolivia</option>
                      <option value="">Bosnia and Herzegovina</option>
                      <option value="">Botswana</option>
                      <option value="">Bouvet Island</option>
                      <option value="">Brazil</option>
                      <option value="">British Indian Ocean Teritory</option>
                      <option value="">Brunie Darussalam</option>
                      <option value="">Bulgaria</option>
                      <option value="">Burkina Faso</option>
                      <option value="">Burundi</option>
                      <option value="">Cambodia</option>
                      <option value="">Cameroon</option>
                      <option value="">Canada</option>
                      <option value="">Cape Verde</option>
                      <option value="">Cayman Islands</option>
                      <option value="">Central African Republic</option>
                      <option value="">Chad</option>
                      <option value="">Chile</option>
                      <option value="">China</option>
                      <option value="">Christmas Island</option>
                      <option value="">Coco (Keeling) Islands</option>
                      <option value="">Colombia</option>
                      <option value="">Congo</option>
                      <option value="">Cook Islands</option>
                      <option value="">Costa Rica</option>
                      <option value="">Cote D'Ivoire</option>
                      <option value="">Croatia</option>
                      <option value="">Cuba</option>
                      <option value="">Cyprus</option>
                      <option value="">Czech Republic</option>
                      <option value="">Denmark</option>
                      <option value="">Djibouti</option>
                      <option value="">Dominica</option>
                      <option value="">Dominican Republic</option>
                      <option value="">East Timor</option>
                      <option value="">Ecuador</option>
                      <option value="">Egypt</option>
                      <option value="">El Savador</option>
                      <option value="">Equitorial Guinea</option>
                      <option value="">Eritrea</option>
                      <option value="">Estonia</option>
                      <option value="">Ethiopia</option>
                      <option value="">Europe</option>
                      <option value="">Falk Isnlands (Malvinas)</option>
                      <option value="">Faroe Islands</option>
                      <option value="">Fiji</option>
                      <option value="">Finland</option>
                      <option value="">France</option>
                      <option value="">France (Metropolitan)</option>
                      <option value="">French Guiana</option>
                      <option value="">French Polynesia</option>
                      <option value="">French Southern Teritories</option>
                      <option value="">Gabon</option>
                      <option value="">Gambia</option>
                      <option value="">Georgia</option>
                      <option value="">Germany</option>
                      <option value="">Ghana</option>
                      <option value="">Gibraltar</option>
                      <option value="">Greece</option>
                      <option value="">Greenland</option>
                      <option value="">Grenada</option>
                      <option value="">Guadeloupe</option>
                      <option value="">Guam</option>
                      <option value="">Guatemenia</option>
                      <option value="">Guinea</option>
                      <option value="">Guinea Bissau</option>
                      <option value="">Guyana</option>
                      <option value="">Haiti</option>
                      <option value="">Heard Island and McDonald Island</option>
                      <option value="">Holy See (Vatican City State)</option>
                      <option value="">Honduras</option>
                      <option value="">Hong Kong</option>
                      <option value="">Hungary</option>
                      <option value="">Iceland</option>
                      <option value="">India</option>
                      <option value="">Indonessia</option>
                      <option value="">Iran</option>
                      <option value="">Iraq</option>
                      <option value="">Ireland</option>
                      <option value="">Israel</option>
                      <option value="">Italy</option>
                      <option value="">Jamaica</option>
                      <option value="">Japan</option>
                      <option value="">Jordan</option>
                      <option value="">Kazakhstan</option>
                      <option value="">Kenya</option>
                      <option value="">Kiribati</option>
                      <option value="">
                        Korea - Democratic People's Repulic of
                      </option>
                      <option value="">Korea- Republic of</option>
                      <option value="">Kuwait</option>
                      <option value="">Kyrgyzstan</option>
                      <option value="">Lao People's Democratic Republic</option>
                      <option value="">Latvia</option>
                      <option value="">Lebanon</option>
                      <option value="">Lesotho</option>
                      <option value="">Liberia</option>
                      <option value="">Libyan Arab Jamahiriya</option>
                      <option value="">Liechtenstein</option>
                      <option value="">Lithuania</option>
                      <option value="">Luxembourg</option>
                      <option value="">Macao</option>
                      <option value="">
                        Macedonia - the Former Yugoslav Republic of
                      </option>
                      <option value="">Madagascar</option>
                      <option value="">Malawi</option>
                      <option value="">Malaysia</option>
                      <option value="">Maldives</option>
                      <option value="">Mali</option>
                      <option value="">Malta</option>
                      <option value="">Marshall Islands</option>
                      <option value="">Martinique</option>
                      <option value="">Mauritania</option>
                      <option value="">Mauritius</option>
                      <option value="">Mexico</option>
                      <option value="">Micronesia - Federated States of</option>
                      <option value="">Moldova - Republic of</option>
                      <option value="">Monaco</option>
                      <option value="">Mongolia</option>
                      <option value="">Montserrat</option>
                      <option value="">Morocco</option>
                      <option value="">Mozambique</option>
                      <option value="">Myanmar</option>
                      <option value="">Namibia</option>
                      <option value="">Nauru</option>
                      <option value="">Nepal</option>
                      <option value="">Netherlands</option>
                      <option value="">Nehterlands Antilles</option>
                      <option value="">New Caledonia</option>
                      <option value="">New Zealand</option>
                      <option value="">Nicaragua</option>
                      <option value="">Niger</option>
                      <option value="">Nigeria</option>
                      <option value="">Niue</option>
                      <option value="">Norkfolk Island</option>
                      <option value="">Northern Mariana Islands</option>
                      <option value="">Norway</option>
                      <option value="">Oman</option>
                      <option value="">Pakistan</option>
                      <option value="">Palau</option>
                      <option value="">Palestinian Territory - Occupied</option>
                      <option value="">Panama</option>
                      <option value="">Papua New Guinea</option>
                      <option value="">Paraguay</option>
                      <option value="">Peru</option>
                      <option value="">Philippines</option>
                      <option value="">Pitcarin</option>
                      <option value="">Poland</option>
                      <option value="">Portugal</option>
                      <option value="">Puerto Rico</option>
                      <option value="">Qatar</option>
                      <option value="">Reunion</option>
                      <option value="">Romania</option>
                      <option value="">Russian Federation</option>
                      <option value="">Rwanda</option>
                      <option value="">Sint Helena</option>
                      <option value="">Saint Kitts and Nevis</option>
                      <option value="">Saint Lucia</option>
                      <option value="">Saint Pierre and Miquelon</option>
                      <option value="">Saint Vincent and the Grenadines</option>
                      <option value="">Samoa</option>
                      <option value="">San Marino</option>
                      <option value="">Sao Tome and Principe</option>
                      <option value="">Saudit Arabia</option>
                      <option value="">Senegal</option>
                      <option value="">Seychelles</option>
                      <option value="">Sierra Leone</option>
                      <option value="">Singapore</option>
                      <option value="">Slovakia</option>
                      <option value="">Slovenia</option>
                      <option value="">Solomon Islands</option>
                      <option value="">Somalia</option>
                      <option value="">South Africa</option>
                      <option value="">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="">Spain</option>
                      <option value="">Sri Lanka</option>
                      <option value="">Sudan</option>
                      <option value="">Suriname</option>
                      <option value="">Svalbard and Jan Mayen</option>
                      <option value="">Swaziland</option>
                      <option value="">Sweden</option>
                      <option value="">Switzerland</option>
                      <option value="">Syrian Arab Republic</option>
                      <option value="">Taiwan</option>
                      <option value="">Tajikistan</option>
                      <option value="">Tanzania (United Republic of)</option>
                      <option value="">Thailand</option>
                      <option value="">Togo</option>
                      <option value="">Tokelau</option>
                      <option value="">Tonga</option>
                      <option value="">Trinidad and Tobago</option>
                      <option value="">Tunisia</option>
                      <option value="">Turkey</option>
                      <option value="">Turkmenistam</option>
                      <option value="">Turks and Calcos Islands</option>
                      <option value="">Tuvalu</option>
                      <option value="">Uganda</option>
                      <option value="">Ukraine</option>
                      <option value="">United Arab Emirates</option>
                      <option value="">United Kingdom</option>
                      <option value="">United States</option>
                      <option value="">
                        United States Minor Outlying Islands
                      </option>
                      <option value="">Uruguay</option>
                      <option value="">Uzbekistan</option>
                      <option value="">Vanuatu</option>
                      <option value="">Venezuela</option>
                      <option value="">Vietnam</option>
                      <option value="">Virgin Islands - British</option>
                      <option value="">Virgin Islands - U.S.</option>
                      <option value="">Wallis and Futuna</option>
                      <option value="">Western Sahara</option>
                      <option value="">Yemen</option>
                      <option value="">Yugoslavia</option>
                      <option value="">Zaire</option>
                      <option value="">Zambia</option>
                      <option value="">Zimbabwe</option>
                    </select>
                  </li>

                  <li className="form-li form-checkout">
                    <input
                      type="text"
                      placeholder="First name (Optional)"
                      className="input-checkout"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      className="input-checkout"
                    />
                  </li>

                  <li className="form-li form-checkout">
                    <input
                      type="text"
                      placeholder="Address"
                      className="input-checkout"
                    />
                  </li>

                  <li className="form-li form-checkout">
                    <input
                      type="text"
                      placeholder="City"
                      className="input-checkout"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="input-checkout"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="input-checkout"
                    />
                  </li>
                  <li className="form-li form-checkout">
                    <input type="checkbox" id="text" className="check-box" />
                    <label htmlFor="text" className="text-description">
                      Save this information for next time
                    </label>
                  </li>

                  <li className=" form-li ">
                    <div className="form-shipping">
                      <label htmlFor="text" className="text-description">
                        <strong>Shipping Method</strong>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your shipping address to view available shipping methods."
                        className="input-ship"
                      />
                    </div>
                  </li>
                </ul>
              </form>
            </div>

            <div className="contact-link payment">
              <h2 className="secondary-header">Payment</h2>
              <p className="text-description">
                All transactions are secure and encrypted.
              </p>
            </div>
            <div className="form ">
              <form action="">
                <div className="form-payment">
                  <ul className="form-ul">
                    <li className="form-li ">
                      <div className="radio">
                        <input type="radio" />
                        <label htmlFor="card" className="text-description ">
                          Credit card
                        </label>
                      </div>
                    </li>

                    <li className="form-li form-checkout">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="input-checkout input-payment"
                        required
                      />
                    </li>

                    <li className="form-li form-checkout">
                      <input
                        type="text"
                        placeholder="Expiration date (MM / YY)"
                        className="input-checkout input-payment"
                      />
                      <input
                        type="text"
                        placeholder="Security code"
                        required
                        className="input-checkout input-payment"
                      />
                    </li>

                    <li className="form-li form-checkout">
                      <input
                        type="text"
                        placeholder="Name on card"
                        className="input-checkout"
                      />
                    </li>

                    <li className="form-li form-checkout">
                      <input type="checkbox" id="text" className="check-box" />
                      <label htmlFor="text" className="text-description">
                        Use shipping address as billing address
                      </label>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-payment ">Pay Now</button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid-2-cols checkout-grid checkout_2">
          <div className="login"></div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
