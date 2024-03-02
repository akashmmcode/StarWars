import React from "react";
import logo from "../../src/assets/StarWars.png";
import "./HeaderComponent.css";
import { Typography } from "@cred/neopop-web/lib/components";
import { fontNameSpaces } from "@cred/neopop-web/lib/primitives";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <Typography {...fontNameSpaces.tc12b} className="planet_name">
            HOME
          </Typography>
        </Link>
        <img className="logo" src={logo}></img>
      </div>
    </>
  );
};

export default HeaderComponent;
