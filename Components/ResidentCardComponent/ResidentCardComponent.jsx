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
  fontNameSpaces,
  getButtonConfig,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";

import "./ResidentCardComponent.css";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const ResidentCardComponent = (props) => {
  const {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
  } = props.obj;

  return (
    <ElevatedCard
      backgroundColor="#0b090a"
      edgeColors={{
        bottom: "#ffd60a",
        right: "#ffd60a",
      }}
      style={{
        width: "300px",
      }}
    >
      <ContentWrapper style={{ border: "1px solid yellow" }}>
        <Column>
          <div className="name">
            <Typography {...fontNameSpaces.th16b} color={mainColors.red}>
              {name}
            </Typography>
          </div>
          <HorizontalSpacer n={8} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Birth Year
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.red}>
              {birth_year}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Eye Color
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.red}>
              {eye_color}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Gender
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.red}>
              {gender}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Skin Color
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.red}>
              {skin_color}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Height
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.red}>
              {height}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Mass
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.red}>
              {mass}
            </Typography>
          </div>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default ResidentCardComponent;
