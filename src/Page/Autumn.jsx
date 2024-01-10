import { HiOutlineChevronDown } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import NewArrivals from "../Features/Home/Arrivals/ArrivalProducts";

function Products() {
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

export default Products;
