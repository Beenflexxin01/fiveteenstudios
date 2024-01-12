import { useEffect, useState } from "react";
import SummerCollectionData from "./SummerCollectionData";
import FilterOperation from "../Features/Products/OperationFilter";
import OperationSort from "../Features/Products/OperationSort";

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
          <div className="filter">
            <p className="filter-li">Filter:</p>
            <FilterOperation />
          </div>
          <div className="sort">
            <p className="filter-li">Sort By:</p>
            <OperationSort />
          </div>
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
