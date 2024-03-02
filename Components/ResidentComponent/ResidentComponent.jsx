import React from "react";
import { useParams } from "react-router-dom";
import ResidentCardComponent from "../ResidentCardComponent/ResidentCardComponent";
import ShimmerComponent from "../ShimmerComponent/ShimmerComponent";
import { Typography } from "@cred/neopop-web/lib/components";
import { fontNameSpaces } from "@cred/neopop-web/lib/primitives";

import "./ResidentComponent.css";
const ResidentComponent = () => {
  const [resident, SetResident] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    getResidentList();
  }, []);

  async function getResidentList() {
    let residentlist = [];
    const data = await fetch("https://swapi.dev/api/planets/?format=json");
    const json = await data.json();
    const residentsAPIS = json?.results[params.id].residents;

    const residentsData = await Promise.allSettled(
      residentsAPIS.map((residentURL) =>
        fetch(residentURL).then((res) => res.json())
      )
    );

    residentsData.forEach((result) => {
      if (result.status === "fulfilled") {
        residentlist.push(result.value);
        SetResident(residentlist);
      } else {
        console.error(result.reason); // Log any errors if fetching data fails
      }
    });
  }

  return (
    <>
      <div className="heading">
        <Typography {...fontNameSpaces.tc12b} className="planet_name">
          RESIDENTS LIST
        </Typography>
      </div>
      {resident.length === 0 ? (
        <>
          <ShimmerComponent />
        </>
      ) : (
        <div className="resident_cards_outer_div">
          {resident.map((item) => {
            return <ResidentCardComponent key={item.name} obj={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default ResidentComponent;
