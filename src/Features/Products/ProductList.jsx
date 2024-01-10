import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { image, _id: productId, title, price, qtnBtn } = product;
  return (
    <>
      <div className="grid-4-cols pointer">
        {/* <Link to={`/productPage/${product._id}`} className="nav-link"> */}
        <div onClick={() => navigate(`/productPage/${productId}`)}>
          <img src={image} alt={title} className="grid-4-image" />
          <div className="text-align">
            <p className="text-description product-text">{title}</p>

            <p className="text-description product-text">{price}</p>
            <p className="text-description product-text">{qtnBtn}</p>
          </div>
        </div>

        {/* </Link> */}
      </div>
    </>
  );
};

export default ProductDetails;
