import "./App.css";
import React from "react";
import {
  CardComponent,
  ShimmerComponent,
  PaginationComponent,
} from "../Components";
import { Typography } from "@cred/neopop-web/lib/components";
import { fontNameSpaces } from "@cred/neopop-web/lib/primitives";

function App() {
  const [planets, SetPlanets] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [cardsPerPage, setCardsPerPage] = React.useState(3);

  React.useEffect(() => {
    getPlanetsList();
  }, []);

  async function getPlanetsList() {
    const data = await fetch("https://swapi.dev/api/planets/?format=json");
    const json = await data.json();
    SetPlanets(json?.results);
  }

  const lastPostIndex = currentPage * cardsPerPage;
  const firstPostindex = lastPostIndex - cardsPerPage;
  const currentPosts = planets.slice(firstPostindex, lastPostIndex);

  return (
    <>
      <div className="heading">
        <Typography {...fontNameSpaces.tc12b} className="planet_name">
          PLANET LIST
        </Typography>
      </div>
      {planets.length === 0 ? (
        <>
          <ShimmerComponent />
        </>
      ) : (
        <div className="planets_outer_div">
          {currentPosts.map((items, index) => {
            return <CardComponent key={items.name} obj={items} count={index} />;
          })}
        </div>
      )}
      <PaginationComponent
        totalPosts={planets.length}
        postsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
