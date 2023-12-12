import { Link } from "react-router-dom";
import f22 from "../../Images/f24.jpeg";
import f15 from "../../Images/f15.jpeg";

function Romans() {
  return (
    <>
      <div className="romans ">
        <p className=" strong-text">
          <strong>/FIV'TEN, 'FIV'TEN/ NUMBER: 15 ROMAN: XV</strong>
        </p>
        <p className="text-description spacing">
          Equivalent to the product of three and five; one more than fourteen,
          or five more than ten; 15.
        </p>
      </div>
      <div className="grid-2 collections">
        <div className="grid-2-cols">
          <img src={f22} alt="" className="grid-image" />
          <Link to="/collections/aw" className="link">
            <p className="text-description link">
              <strong>A/W &rarr;</strong>
            </p>
          </Link>
        </div>
        <div className="grid-2-cols">
          <img src={f15} alt="" className="grid-image" />
          <Link to="/collections/ss" className="link">
            <p className="text-description link ">
              <strong>S/S &rarr;</strong>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Romans;
