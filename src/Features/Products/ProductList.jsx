import { useNavigate } from "react-router-dom";
// import Button from "../../UI/Button";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { image, _id: productId, title, price } = product;

  return (
    <>
      <div
        className="grid-4-cols pointer"
        onClick={() => navigate(`/productPage/${productId}`)}>
        <div>
          <img src={image} alt={title} className="grid-4-image" />
          <div className="cart-detail-btn"></div>
          <div className="text-align">
            <p className="text-description product-text">{title}</p>

            <p className="text-description product-text">${price}.00 USD</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
