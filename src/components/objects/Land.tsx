import React from "react";
import landImg from "assets/farm/farm-area.png";
import styled from "styled-components";
import { PropsType } from "global";

const Land = ({ column, row }: PropsType) => {
  return (
    <LandStyle style={{ gridColumn: column, gridRow: row }}>
      <img src={landImg} alt="Land" />
    </LandStyle>
  );
};

export default Land;
const LandStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    transform: scale(1);
    object-fit: cover;
    image-rendering: crisp-edges;
  }
`;
