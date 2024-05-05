import { useState, useEffect } from "react";
import AllFeatureProductData from "./AllFeatureProductData";
import FilterOperation from "../../Products/OperationFilter";
import OperationSort from "../../Products/OperationSort";
import Footer from "../../../UI/Footer";
import BackendLink from "../../utils/BackendLink";

function AllFeatureProducts() {
  const [allFeatures, setAllFeatures] = useState([]);

  useEffect(function () {
    async function getAllFeatures() {
      try {
        const res = await fetch(`${BackendLink}/api/allfeatures`);
        if (!res.ok)
          throw new Error(
            "There was an issue while trying to display all features"
          );

        const data = await res.json();

        if (data.Response === "False")
          throw new Error(
            "Error while loading all features!! Try again later."
          );

        setAllFeatures(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllFeatures();
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="secondary-header ">FEATURED PRODUCTS</h2>
        <div className="filters">
          <div className="filter">
            <li className="filter-li">Filter:</li>
            <FilterOperation />
          </div>
          <div className="sort">
            <div className="filter-li">Sort By:</div>
            <OperationSort />
          </div>
        </div>

        <div className="grid-4">
          {allFeatures &&
            allFeatures.map((allfeatures) => {
              return (
                <AllFeatureProductData
                  allfeatures={allfeatures}
                  key={allfeatures._id}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllFeatureProducts;
