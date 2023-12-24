import styled from "styled-components";

export const LandStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    transform: scale(1);
    object-fit: cover;
    image-rendering: crisp-edges;
  }
  .havest-icon {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-havest {
      width: 30px;
      img {
        width: 100%;
      }
    }
  }
  .time-havert {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-progress-line {
      margin-inline-end: 0;
      margin-bottom: 0;
    }
    .ant-progress-inner {
      background: #cccc;
      border: 1px solid #fff;
      height: 12px;
      .ant-progress-bg {
        height: 100% !important;
      }
    }

    .time {
      position: absolute;
      font-size: 9px;
      font-weight: 700;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
      color: #000;
    }

    img {
      width: 100%;
    }
  }
`;

export const SeedBoxStyles = styled.div`
  position: absolute;
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
        width: 100%;
      }
      .quantity {
        position: absolute;
        right: -4px;
        top: -6px;
        font-size: 10px;
        font-weight: 700;
        background: #fff;
        border-radius: 7px;
        min-width: 35px;
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
