import React from "react";
import landImg from "assets/farm/farm-area.png";
import styled from "styled-components";
import { PropsType } from "global";

const Land = ({ column, row, children, onClick }: PropsType) => {
  return (
    <LandStyle style={{ gridColumn: column, gridRow: row }} onClick={onClick}>
      <img src={landImg} alt="Land" />
      {children}
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
  .havert {
    position: absolute;
    top: -25px;
    width: 30px;
    z-index: 999;

    .time-end {
      font-size: 10px;
      font-weight: 700;
      color: #fff;
    }

    img {
      width: 100%;
    }
  }
`;
