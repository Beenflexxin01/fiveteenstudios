import { useEffect, useState } from "react";
import NewArrivals from "../Features/Home/Arrivals/ArrivalProducts";
import FilterOperation from "../Features/Products/OperationFilter";
import OperationSort from "../Features/Products/OperationSort";
function Autumn() {
  const [arrivals, setArrivals] = useState([]);

  useEffect(function () {
    async function getArrivals() {
      try {
        const res = await fetch(`http://localhost:5000/api/arrivals`);
        if (!res.ok)
          throw new Error("There is an error while loading the arrivals");

        const data = await res.json();
        if (data.Resonse === "False") throw new Error("Error loading arrivals");
        setArrivals(data);
      } catch (err) {
        console.log(err);
      }
    }
    getArrivals();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="primary-header h1">A/W</h1>
        <p className="secondary-header ">Autumn/Winter Collection.</p>
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
          {arrivals &&
            arrivals.map((arrivalData) => {
              return (
                <NewArrivals arrivalData={arrivalData} key={arrivalData._id} />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Autumn;
