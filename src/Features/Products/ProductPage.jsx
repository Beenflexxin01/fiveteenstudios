// import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../UI/Footer";
import Loader from "../../UI/Loader";
import f41 from "../../Images/f41.jpeg";
import f42 from "../../Images/f42.jpeg";
import f43 from "../../Images/f43.jpeg";
import f52 from "../../Images/f52.jpeg";

function ProductPage() {
  const [product, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const { id } = useParams();
  const {
    title,
    default: defaultText,
    price,
    oldPrice,
    image,
    hiddenImage,
    imageCover,
    description,
    size,
    sale,
    paymentOption,
    shipPrice,
    quantity,
    qtnNum,
    qtnBtn,
    qtnBtnAdd,
    color,
    cart,
    buy,
    btnPay,
    btnPal,
    soldOut,
  } = product;
  useEffect(
    function () {
      async function getProductDetails() {
        try {
          const res = await fetch(`http://localhost:5000/api/products/${id}`);
          if (!res.ok)
            throw new Error(
              "Something went wrong while loading the blogs from the database."
            );
          const data = await res.json();

          if (data.Response === "False") throw new Error("Blogs not found");
          setProductData(data);

          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getProductDetails();
    },
    [id]
  );

  return (
    <>
      <div className="grid-2 product--grid">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="grid-2-cols checkout-grid product-grid">
              <div className="product-img">
                <img src={image} alt={title} className="product-image" />
              </div>

              <div className="img-grid">
                {/* <img src={`${imageCover}`} alt={title} /> */}
              </div>
            </div>
            <div className="grid-2-cols checkout-grid product-grid">
              <p className="text-descriptions">{defaultText}</p>
              <h2 className="secondary-header">{title}</h2>
              <p className="text-description">{description}</p>
              <div className="price-group">
                <p className="text-description">{price}</p>
                <p className="text-description strike">
                  <s>{oldPrice}</s>
                </p>
                <p className="text-descriptions">{soldOut}</p>
                <p className="text-descriptions sale">{sale}</p>
              </div>
              <p className="text-descriptions">
                <Link to="https://fiveteenstudios.com/policies/shipping-policy">
                  Shipping
                </Link>{" "}
                {shipPrice}
              </p>
              <p className="text-descriptions">Size</p>
              <div className="product-size">
                <p className="text-description">{size}</p>
              </div>

              <div>
                <span className="color">{color}</span>
              </div>

              <p className="text-descriptions">{quantity}</p>
              <div className="quantity product-size">
                <button className="quantity-btn ">{qtnBtn}</button>
                <p className="text-description">{qtnNum}</p>
                <button className="quantity-btn ">{qtnBtnAdd}</button>
              </div>
              <div className="btn-div">
                <button className="btn btn-cart">{cart}</button>
                <button className="paypal btn-pay">
                  <span className="buy"> {buy}</span>{" "}
                  <span className="span">{btnPay}</span>
                  <span className="span-pal">{btnPal}</span>
                </button>
              </div>
              <div className="payment-link">
                <Link to="" className="text-descriptions nav-link">
                  {paymentOption}
                </Link>
              </div>
            </div>
          </>
        )}
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
