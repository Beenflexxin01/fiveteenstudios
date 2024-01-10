import ReactPlayer from "react-player";

import { useEffect, useRef, useState } from "react";
import NewArrivals from "./ArrivalProducts";
const VIDEO_PATH = "https://www.youtube.com/watch?v=o-Mgx_XLqYM&themeRefresh=1";

function Arrivals() {
  const playerRef = useRef(null);
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
        <h2 className="secondary-header">NEW ARRIVALS</h2>

        <div className="grid-4">
          {arrivals &&
            arrivals.map((arrivalData) => {
              return (
                <NewArrivals arrivalData={arrivalData} key={arrivalData._id} />
              );
            })}
        </div>
        <div className="video">
          <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
      </div>
    </>
  );
}

export default Arrivals;
