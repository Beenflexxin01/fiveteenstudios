import { useEffect, useState } from "react";
import NewArrivals from "../Features/Home/Arrivals/ArrivalProducts";

function OtherProducts() {
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
        <h2 className="secondary-header">You may also like</h2>

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

export default OtherProducts;
