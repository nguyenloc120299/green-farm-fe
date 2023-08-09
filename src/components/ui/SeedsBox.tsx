import React, { useRef } from "react";
import styled from "styled-components";
import carot from "assets/image/carot_avt.png";
import corn from "assets/image/corn_avt.png";

import { useFnOpen } from "hooks/useOpen";

const SeedsBox = () => {
  const refDisplay = useRef<any>();
  const { onOpen } = useFnOpen();

  return (
    <SeedBoxStyles ref={refDisplay}>
      <div className="body">
        <div className="seed">
          <img src={carot} />
          <div className="quantity">100</div>
        </div>
        <div className="seed">
          <img src={corn} />
          <div className="quantity">5</div>
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
    justify-content: center;
    align-items: center;
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
 
      .quantity {
        position: absolute;
        right: 3px;
        top: -3px;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
`;
