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
  .time-havert {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 50px;
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
      top: 40%;
      transform: translate(-50%, -50%);
      z-index: 99;
      color: #fff;
    }

    img {
      width: 100%;
    }
  }
`;