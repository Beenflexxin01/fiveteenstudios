import { useNavigate } from "react-router-dom";

function SummerCollectionData({ summer }) {
  const { image, title, price } = summer;
  const navigate = useNavigate();
  return (
    <>
      <div className="grid-4-cols pointer">
        <div onClick={() => navigate(`/summerDetails/${summer._id}`)}>
          <div className="hidden">
            <img src={image} alt={title} className="grid-4-image" />
          </div>
          <div className="text-align">
            <p className="text-description">{title}</p>
            <p className="text-description">${price}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummerCollectionData;
