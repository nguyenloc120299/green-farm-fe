import { PropsType } from "global";
import React from "react";
import styled from "styled-components";
import chickenCoop from "assets/farm/chicken_barn.png";
const ChickenCoop = ({ column, row }: PropsType) => {
  return (
    <ChickenCoopStyled style={{ gridColumn: column, gridRow: row }}>
      <img src={chickenCoop} alt="chicken" />
    </ChickenCoopStyled>
  );
};

export default ChickenCoop;

const ChickenCoopStyled = styled.div`
img{

}`;
