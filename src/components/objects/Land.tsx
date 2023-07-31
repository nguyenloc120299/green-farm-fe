import React from "react";
import landImg from "assets/farm/farm-area.png";
import styled from "styled-components";
import { PropsType } from "global";
import useToggle from "hooks/useToggle";
import { Popover } from "antd";

const Land = ({ column, row,children,onClick }: PropsType) => {

  return (
    <LandStyle
      style={{ gridColumn: column, gridRow: row }}
    >
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
`;
