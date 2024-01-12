import { useNavigate } from "react-router-dom";

function FeatureProductsData({ features }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid-4-cols pointer">
        <div onClick={() => navigate(`/featureData/${features._id}`)}>
          <img
            src={features.image}
            alt={features.title}
            className="grid-4-image"
          />
          <div className="text-align">
            <p className="text-description">
              <strong>{features.title}</strong>
            </p>
            <p className="text-description">{features.price}</p>
            <img src={features.imageCover} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProductsData;
