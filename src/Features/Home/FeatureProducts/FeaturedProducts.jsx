import { useEffect, useState } from "react";
import FeatureProductsData from "./FeatureProductsData";
import { useNavigate } from "react-router-dom";
import BackendLink from "../../../utils/BackendLink";

function Products() {
  const [featureProducts, setFeatureProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(function () {
    async function getFeatureProducts() {
      try {
        const res = await fetch(`${BackendLink}/api/features`);

        if (!res.ok)
          throw new Error(
            "Feature products can not be loaded. Kindly connect to the internet!!!"
          );

        const data = await res.json();

        if (data.Response === "False")
          throw new Error("Error loading products.. Try again!!");

        setFeatureProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getFeatureProducts();
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="secondary-header">FEATURED PRODUCTS</h2>
        <div className="grid-4 arrival-grid">
          {featureProducts &&
            featureProducts.map((features) => {
              return (
                <FeatureProductsData features={features} key={features._id} />
              );
            })}
        </div>
      </div>

      <button
        className="btn btn-view "
        onClick={() => navigate("/AllFeatureProducts")}>
        View All
      </button>

      <div className="romans">
        <p className="text-description">
          Ever wonder why five comes after four but not fiveteen after fourteen?
        </p>
        <p className="text-description">
          The brand namee Fiveteen is from the Latin XV (quin decim) which
          directly translates to fiveteen.
        </p>
        <p className="text-description">
          Tired of following the norm? We are too. Here at Fiveteen, we're
          designing products that don't just look good, but also provide
          feelings and sensations past just the visual
        </p>
      </div>
    </>
  );
}

export default Products;
