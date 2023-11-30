import React, { useRef, useState } from "react";
import landImg from "assets/farm/farm-area.png";
import styled from "styled-components";
import { PropsType } from "global";
import { Progress } from "antd";
import useOnClickOutside from "hooks/useClickOutSide";

const Land = ({ column, row, children, onClick }: PropsType) => {
  const [isShow, setIsShow] = useState(false)
  const ref = useRef<any>()
  useOnClickOutside(ref, () => {
    isShow && setIsShow(false)
  })
  return (
    <LandStyle style={{ gridColumn: column, gridRow: row }} onClick={() => {
      onClick && onClick()
      setIsShow(true)
    }} ref={ref}>
      <img src={landImg} alt="Land" />
      {children}
      {
        isShow &&

        <div className="time-havert">
          <div className="time">
            00:30
          </div>
          <Progress percent={30} showInfo={false} strokeColor={"#3b9615"} />
        </div>
      }
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
  .time-havert {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 50px;
    .ant-progress-inner{
      background: #cccc;
      border: 1px solid #fff;
      height: 12px;
      .ant-progress-bg{
        height: 100% !important;
      }
    }
    .time{
    position: absolute;
    font-size: 9px;
    font-weight: 700;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);
    z-index: 99;
    color: #fff;
    }

    img {
      width: 100%;
    }
  }
`;
