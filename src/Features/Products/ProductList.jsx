import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  return (
    <>
      <div className="grid-4-cols">
        <Link to="/productPage" className="nav-link">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="grid-4-image"
            />
            <div className="text-align">
              <p className="text-description">{product.title}</p>

              <p className="text-description">${product.price}.00</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductDetails;
