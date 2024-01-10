import { NavLink } from "react-router-dom";

import { HiOutlineChevronDown } from "react-icons/hi2";
import { useEffect, useState } from "react";
import SummerCollectionData from "./SummerCollectionData";

function Products() {
  const [summerCollections, setSummerCollections] = useState([]);

  useEffect(function () {
    async function getSummerCollections() {
      try {
        const res = await fetch("http://localhost:5000/api/summer");
        if (!res.ok) throw new Error("Unable to display summer collections");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Unable to load data");
        setSummerCollections(data);
      } catch (err) {
        console.log(err);
      }
    }
    getSummerCollections();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="primary-header h1">S/S</h1>
        <p className="secondary-header ">Spring/Summer Collection.</p>
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
          {summerCollections &&
            summerCollections.map((summer) => (
              <SummerCollectionData summer={summer} key={summer._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Products;
