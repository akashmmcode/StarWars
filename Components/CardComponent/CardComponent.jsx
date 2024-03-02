import React from "react";
import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
  Tag,
  Button,
} from "@cred/neopop-web/lib/components";
import {
  mainColors,
  colorPalette,
  colorGuide,
  FontVariant,
  fontNameSpaces,
  getButtonConfig,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";
import "./CardComponent.css";

import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const CardComponent = (props) => {
  const { name, rotation_period, climate, gravity, terrain, population } =
    props.obj;

  return (
    <ElevatedCard
      className="CardComponent"
      backgroundColor="#0b090a"
      edgeColors={{
        bottom: "white",
        right: "white",
      }}
      style={{
        // width: "230px",
        width: "400px",
      }}
    >
      <ContentWrapper>
        <Column>
          <Row className="v-justify">
            <div>
              <Typography
                className="number"
                {...fontNameSpaces.tb11m}
                color={colorPalette.popWhite[100]}
              >
                #00{props.count + 1}
              </Typography>
              <Typography {...fontNameSpaces.tc12b} className="planet_name">
                {name}
              </Typography>
              {/* <HorizontalSpacer n={2} /> */}
            </div>
            <Row
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: `1px solid ${mainColors.white}`,
              }}
              className="h-center v-center"
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              />
            </Row>
          </Row>

          <HorizontalSpacer n={5} />
          <div className="rotation_period">
            <Typography {...FontVariant.CapsBold12} color={mainColors.white}>
              Rotation Period-
            </Typography>
            <Typography {...FontVariant.CapsBold10} color={mainColors.yellow}>
              {rotation_period}
            </Typography>
          </div>
          <div className="climate">
            <Typography {...FontVariant.CapsBold12} color={mainColors.white}>
              Climate-
            </Typography>
            <Typography {...FontVariant.CapsBold10} color={mainColors.yellow}>
              {climate}
            </Typography>
          </div>
          <div className="gravity">
            <Typography {...FontVariant.CapsBold12} color={mainColors.white}>
              Gravity-
            </Typography>
            <Typography {...FontVariant.CapsBold10} color={mainColors.yellow}>
              {gravity}
            </Typography>
          </div>
          <div className="terrain">
            <Typography {...FontVariant.CapsBold12} color={mainColors.white}>
              Terrain-
            </Typography>
            <Typography {...FontVariant.CapsBold10} color={mainColors.yellow}>
              {terrain}
            </Typography>
          </div>
          <div className="population">
            <Typography {...FontVariant.CapsBold12} color={mainColors.white}>
              Population-
            </Typography>
            <Typography {...FontVariant.CapsBold10} color={mainColors.yellow}>
              {population}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <HorizontalSpacer n={4} />
          <div className="resident">
            <Typography
              {...FontVariant.CapsBold12}
              color={mainColors.white}
              style={{ margin: "auto" }}
            >
              Residents -
            </Typography>
            <Link to={"/residentdetails/" + props.count} key={name}>
              <Button
                variant="secondary"
                kind="elevated"
                size="small"
                showArrow
              >
                View Details
              </Button>
            </Link>
          </div>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default CardComponent;
