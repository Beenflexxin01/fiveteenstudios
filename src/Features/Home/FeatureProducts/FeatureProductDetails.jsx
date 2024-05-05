import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../UI/Footer";
import Loader from "../../../UI/Loader";
import OtherProducts from "../../../UI/ProductCollections";
import CartFunction from "../../../UI/CartFunction";
import BackendLink from "../../../utils/BackendLink";

function FeatureProductDetails({ cart, setCart }) {
  const [product, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const { id } = useParams();

  const {
    title,
    default: defaultText,
    price,
    oldPrice,
    image,
    description,
    size,
    sale,
    paymentOption,
    shipPrice,
    quantity,
    color,
    soldOut,
    // imageCover,
  } = product;

  useEffect(
    function () {
      async function getFeatureProductDetails() {
        try {
          const res = await fetch(`${BackendLink}/api/features/${id}`);
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
      getFeatureProductDetails();
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

              <div className="img-grid"></div>
            </div>
            <div className="grid-2-cols checkout-grid product-grid">
              <p className="text-descriptions">{defaultText}</p>
              <h2 className="secondary-header">{title}</h2>
              <p className="text-description">{description}</p>
              <div className="price-group">
                <p className="text-description">${price}.00 USD</p>
                <p className="text-description strike">
                  <s>${oldPrice}.00</s>
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
              <CartFunction product={product} cart={cart} setCart={setCart} />
              <div className="payment-link">
                <Link to="" className="text-descriptions nav-link">
                  {paymentOption}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <OtherProducts />
      <Footer />
    </>
  );
}

export default FeatureProductDetails;
