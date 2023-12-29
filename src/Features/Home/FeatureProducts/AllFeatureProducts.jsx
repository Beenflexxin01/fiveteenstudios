import { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import AllFeatureProductData from "./AllFeatureProductData";
import Footer from "../../../UI/Footer";

function AllFeatureProducts() {
  const [allFeatures, setAllFeatures] = useState([]);

  useEffect(function () {
    async function getAllFeatures() {
      try {
        const res = await fetch("http://localhost:5000/api/allfeatures");
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
          <ul className="filter-ul">
            <div className="filter">
              <li className="filter-li">Filter:</li>
              <li className="filter-li">
                <NavLink to="" className="link">
                  <span>Availablity</span>
                  <HiOutlineChevronDown />
                </NavLink>
              </li>
              <li className="filter-li">
                <NavLink to="" className="link">
                  <span>Price</span>
                  <HiOutlineChevronDown />
                </NavLink>
              </li>
            </div>
            <div className="sort">
              <li className="filter-li">Sort By:</li>

              <li className="filter-li">
                <NavLink to="" className="link">
                  <span>Alphabetically, A - Z</span>
                  <HiOutlineChevronDown />
                </NavLink>
              </li>

              <li className="filter-li">X products</li>
            </div>
          </ul>
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
