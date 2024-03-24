import { useNavigate } from "react-router-dom";

function NewArrivals({ arrivalData }) {
  const { image, title, price, hiddenImage } = arrivalData;
  const navigate = useNavigate();
  return (
    <>
        <div className="grid-4-cols pointer">
      <div onClick={() => navigate(`/arrivalData/${arrivalData._id}`)}>
          <div className="hidden">
            <img src={image} alt={title} className="grid-4-image" />
            <div className="hidden-img">
              <img src={hiddenImage} alt={title} className="grid-4-image" />
            </div>
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

export default NewArrivals;
