import { Link } from "react-router-dom";
// import f25 from "../../Images/f25.jpeg";
import f25 from "../../Images/f20.jpeg";
import f27 from "../../Images/f26.jpeg";
// import f27 from "../../Images/f23.jpeg";
function Content() {
  return (
    <div>
      <div className="grid-2 grid-margin">
        <img src={f25} alt="" className="grid-img" />
        <img src={f27} alt="" className="grid-img" />
      </div>
      <div className="content-texts">
        <h1 className="primary-header">COZY SZN</h1>
        <p className="texts">Autumn/Winter 23' Collections</p>

        <Link to="/collections/aw">
          <button className="btn">Available Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Content;
