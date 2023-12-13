import React, { useRef, useState } from "react";
import landImg from "assets/farm/farm-area.png";
import { PropsType } from "global";
import { Progress } from "antd";
import useOnClickOutside from "hooks/useClickOutSide";
import { LandStyle } from "globalStyles/land";

const Land = ({ column, row, children, onClick, status }: PropsType) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useRef<any>();
  useOnClickOutside(ref, () => {
    isShow && setIsShow(false);
  });
  return (
    <LandStyle
      style={{ gridColumn: column, gridRow: row }}
      onClick={() => {
        onClick && onClick();
        status && setIsShow(true);
      }}
      ref={ref}
    >
      <img src={landImg} alt="Land" />
      {children}
      {isShow && (
        <div className="time-havert">
          <div className="time">00:30</div>
          <Progress percent={30} showInfo={false} strokeColor={"#3b9615"} />
        </div>
      )}
    </LandStyle>
  );
};

export default Land;

