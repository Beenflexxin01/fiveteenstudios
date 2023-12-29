import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid-4-cols pointer">
        {/* <Link to={`/productPage/${product._id}`} className="nav-link"> */}
        <div onClick={() => navigate(`/productPage/${product._id}`)}>
          <img
            src={product.image}
            alt={product.title}
            className="grid-4-image"
          />
          <div className="text-align">
            <p className="text-description product-text">{product.title}</p>

            <p className="text-description product-text">${product.price}.00</p>
          </div>
        </div>

        {/* </Link> */}
      </div>
    </>
  );
};

export default ProductDetails;
