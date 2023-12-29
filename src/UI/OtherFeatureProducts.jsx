import { useEffect, useState } from "react";
import FeatureProductsData from "../Features/Home/FeatureProducts/FeatureProductsData";
function OtherFeatureProducts() {
  const [featureProducts, setFeatureProducts] = useState([]);
  useEffect(function () {
    async function getFeatureProducts() {
      try {
        const res = await fetch("http://localhost:5000/api/features");

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
        <h2 className="secondary-header">Featured Collection</h2>
        <div className="grid-4">
          {featureProducts &&
            featureProducts.map((features) => {
              return (
                <FeatureProductsData features={features} key={features._id} />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default OtherFeatureProducts;
