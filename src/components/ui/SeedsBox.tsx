import React, { useRef } from "react";
import styled from "styled-components";
import carot from "assets/mipmap-xxxhdpi-v4/home_house_npc9.png";
import corn from "assets/mipmap-xxxhdpi-v4/home_house_npc1.png";
import rice from "assets/mipmap-xxxhdpi-v4/home_house_npc2.png";
import { useFnOpen } from "hooks/useOpen";

const SeedsBox = () => {
  const refDisplay = useRef<any>();
  const { onOpen } = useFnOpen();

  return (
    <SeedBoxStyles ref={refDisplay}>
      <div className="body">
        <div className="seed">
          <img src={carot} />
          <div className="quantity">100k</div>
        </div>
        <div className="seed">
          <img src={corn} />
          <div className="quantity">50k</div>
        </div>
        <div className="seed">
          <img src={rice} />
          <div className="quantity">20k</div>
        </div>
      </div>
    </SeedBoxStyles>
  );
};

export default SeedsBox;
const SeedBoxStyles = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  .body {
    max-width: 300px;
    width: 100%;
    margin: auto;
    height: 80px;
    background: #c5a275;
    box-shadow: 2px 3px 0 0 #bbb;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    padding: 0 10px;
    .seed {
      width: 60px;
      height: 60px;
      border-radius: 5px;
      background: #f7dbb6;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      position: relative;
      cursor: pointer;
      img {
        width: 70%;
        height: 70%;
      }
      .quantity {
        position: absolute;
        right: -4px;
        top: -6px;
        font-size: 10px;
        font-weight: 700;
        background: #fff;
        border-radius: 7px;
        min-width: 25px;
        z-index: 99;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        color: #9e7741;
      }
    }
  }
`;
