import { useNavigate } from "react-router-dom";

function AllFeatureProductData({ allfeatures }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid-4-cols pointer">
        <div onClick={() => navigate(`/allfeatureData/${allfeatures._id}`)}>
          <img
            src={allfeatures.image}
            alt={allfeatures.title}
            className="grid-4-image"
          />
          <div className="text-align">
            <p className="text-description">
              <strong>{allfeatures.title}</strong>
            </p>
            <p className="text-description">${allfeatures.price}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllFeatureProductData;
