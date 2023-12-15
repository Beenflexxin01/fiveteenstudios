import { Link } from "react-router-dom";
import f17 from "../../Images/f17.jpeg";
import f78 from "../../Images/f78.jpeg";
import f71 from "../../Images/f71.jpeg";
import f72 from "../../Images/f72.jpeg";
import f74 from "../../Images/f74.jpeg";
import f75 from "../../Images/f75.jpeg";
import f41 from "../../Images/f41.jpeg";
import f42 from "../../Images/f42.jpeg";
import f43 from "../../Images/f43.jpeg";
import f52 from "../../Images/f52.jpeg";
import Footer from "../../UI/Footer";

// import { products } from "../../data/fiveteendata.json";

function ProductPage() {
  return (
    <>
      <div className="grid-2 product--grid">
        <div className="grid-2-cols checkout-grid product-grid">
          <div className="product-img">
            <img src={f78} alt="COZY - SZN" className="product-image" />
          </div>
          <div className="product-image-grid">
            {/* <div className="product-img-grid">
                
                <img src={imageCover} alt="" className="img-grid-1" />
              </div>
              <div className="img-grid">
                <img src={imageCover} alt="" className="img-grid-1" />
              </div> */}
            <div className="img-grid">
              <img src={f72} alt="" className="img-grid-1" />
            </div>
            <div className="img-grid">
              <img src={f74} alt="" className="img-grid-1" />
            </div>
            <div className="img-grid">
              <img src={f75} alt="" className="img-grid-1" />
            </div>
            <div className="img-grid">
              <img src={f78} alt="" className="img-grid-1" />
            </div>
            <div className="img-grid">
              <img src={f71} alt="" className="img-grid-1" />
            </div>
            <div className="img-grid">
              <img src={f17} alt="" className="img-grid-1" />
            </div>
          </div>
        </div>

        <div className="grid-2-cols checkout-grid product-grid">
          <div className="cozy">
            <p className="text-descriptions"> FIVETEEN STUDIOS</p>
            <h2 className="secondary-header h1">COZY SZN</h2>
          </div>
          <p className="text-description">
            Hoodie sweatshirt made of cotton with brushed interior. Collar with
            hood and long sleeves. Fribt pouch pocket. Rib trim.
          </p>
          <p className="text-description">$60.00 USD</p>
          <p className="text-descriptions">
            <Link to="https://fiveteenstudios.com/policies/shipping-policy">
              Shipping
            </Link>{" "}
            calculated at checkout.
          </p>
          <p className="text-descriptions">Size</p>
          <div className="product-size">
            <p className="text-description active-size">M</p>
            <p className="text-description border">L</p>
            <p className="text-description border">XL</p>
          </div>

          <p className="text-descriptions">Quantity</p>
          <div className="quantity product-size">
            <button className="quantity-btn ">-</button>
            <p className="text-description">1</p>
            <button className="quantity-btn ">+</button>
          </div>
          <div className="btn-div">
            <button className="btn btn-cart">Add to cart</button>
            <button className="paypal btn-pay">
              <span className="buy"> Buy with</span>{" "}
              <span className="span">Pay</span>
              <span className="span-pal">Pal</span>
            </button>
          </div>
          <div className="payment-link">
            <Link to="" className="text-description">
              More payment options
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="secondary-header">You may also like</h2>
        <div className="grid-4">
          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f41} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>XV SWEATPANTS</strong>
                </p>
                <p className="text-description">$48.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f42} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>XVarsity</strong>
                </p>
                <p className="text-description">$80.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f43} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>XV PALMS</strong>
                </p>
                <p className="text-description">$30.00USD</p>
              </div>
            </Link>
          </div>

          <div className="grid-4-cols">
            <Link to="" className="nav-link">
              <img src={f52} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>FVT CLASSIC</strong>
                </p>
                <p className="text-description">$28.00USD</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
