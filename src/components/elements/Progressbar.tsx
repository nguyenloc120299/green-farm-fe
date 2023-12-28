import { Progress } from "antd";
import React, { useEffect, useState } from "react";

interface Props {
  totalTime: number;
}
const Progressbar = ({ totalTime }: Props) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1000);
      if (currentTime >= totalTime) {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime, totalTime]);

  const progressPercent = (currentTime / totalTime) * 100;
  return (
    <Progress
      percent={progressPercent}
      showInfo={false}
      strokeColor={"#3b9615"}
      
    />
  );
};

export default Progressbar;
