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
      backgroundColor="#01baef"
      edgeColors={{
        bottom: "#ffd60a",
        right: "#ffd60a",
      }}
      style={{
        width: "300px",
      }}
    >
      <ContentWrapper>
        <Column>
          <div className="name">
            <Typography {...fontNameSpaces.th16b} color={mainColors.black}>
              {name}
            </Typography>
          </div>
          <HorizontalSpacer n={8} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Birth Year
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.black}>
              {birth_year}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Eye Color
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.black}>
              {eye_color}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Gender
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.black}>
              {gender}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Skin Color
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.black}>
              {skin_color}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Height
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.black}>
              {height}
            </Typography>
          </div>
          <HorizontalSpacer n={2} />
          <div className="name">
            <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
              Mass
            </Typography>
            <Typography {...fontNameSpaces.th14b} color={mainColors.black}>
              {mass}
            </Typography>
          </div>
        </Column>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default ResidentCardComponent;
