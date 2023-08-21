import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
interface WeelType {
  segments: Array<any>;
  segColors: string[];
  winningSegment: any;
  onFinished: any;
  primaryColor: string;
  contrastColor: string;
  buttonText: string;
  isOnlyOnce: boolean;
  size: number;
  upDuration: number;
  downDuration: number;
  fontFamily?: string;
}
const WheelComponent = ({
  segments,
  segColors,
  winningSegment,
  onFinished,
  primaryColor = "black",
  contrastColor = "white",
  buttonText = "Spin",
  isOnlyOnce = true,
  size = 100,
  upDuration = 100,
  downDuration = 1000,
  fontFamily = "Montserrat",
}: WeelType) => {
  let currentSegment = "";
  let isStarted = false;
  const [isFinished, setFinished] = useState(false);
  const weelRef = useRef<any>(null);
  let timerHandle = 0 as any;
  const timerDelay = segments.length;
  let angleCurrent = 0;
  let angleDelta = 0;
  let canvasContext = null as any;
  let maxSpeed = Math.PI / segments.length;
  const upTime = segments.length * upDuration;
  const downTime = segments.length * downDuration;
  let spinStart = 0;
  let frames = 0;
  const centerX = 150;
  const centerY = 150;
  useEffect(() => {
    wheelInit();
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 0);
  }, []);
  const wheelInit = () => {
    initCanvas();
    wheelDraw();
  };

  const initCanvas = () => {
    let canvas = document.getElementById("canvas") as any;

    if (canvas) {
      if (navigator.userAgent.indexOf("MSIE") !== -1) {
        canvas = document.createElement("canvas");
        canvas.setAttribute("width", "350");
        canvas.setAttribute("height", "300");
        canvas.setAttribute("id", "canvas");
        const canvasWeel = document.getElementById("wheel");
        if (canvasWeel) canvasWeel.appendChild(canvas);
      }
      canvas.addEventListener("click", spin, false);
      canvasContext = canvas.getContext("2d");
    }
  };

  const spin = () => {
    isStarted = true;
    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      // maxSpeed = Math.PI / ((segments.length*2) + Math.random())
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  const onTimerTick = () => {
    frames++;
    draw();
    const duration = new Date().getTime() - spinStart;
    let progress = 0;
    let finished = false;
    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta =
          maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
      }
      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  const wheelDraw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const draw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const drawSegment = (key: any, lastAngle: any, angle: any) => {
    const ctx = canvasContext;
    const value = segments[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor;
    ctx.font = "30px Arial";
    ctx.fillText(value.substr(0, 21), size / 2 + 30, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    const ctx = canvasContext;
    let lastAngle = angleCurrent;
    const len = segments.length;
    const PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1rem " + fontFamily;
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    // Draw a center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor;
    // ctx.lineWidth = 10;

    ctx.strokeStyle = contrastColor;
    ctx.fill();
    ctx.font = "bold 1em " + fontFamily;
    ctx.fillStyle = contrastColor;
    ctx.textAlign = "center";
    ctx.fillText(buttonText, centerX, centerY + 3);
    ctx.stroke();

    // // Draw outer circle
    // ctx.beginPath();
    // ctx.arc(centerX, centerY, size, 0, PI2, false);
    // ctx.closePath();

    ctx.lineWidth = 5;
    ctx.strokeStyle = contrastColor;
    ctx.stroke();
  };

  const drawNeedle = () => {
    const ctx = canvasContext;
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = primaryColor;
    // ctx.fileStyle = primaryColor;
    ctx.beginPath();
    ctx.moveTo(centerX + 10, centerY - 29);
    ctx.lineTo(centerX - 10, centerY - 29);
    ctx.lineTo(centerX, centerY - 40);
    ctx.closePath();
    ctx.fill();
    // const change = angleCurrent + Math.PI / 2;
    // let i =
    //   segments.length -
    //   Math.floor((change / (Math.PI * 2)) * segments.length) -
    //   1;
    // const canvasWeel = document.getElementById("wheel");
    // ctx.textBaseline = "middle";
    // ctx.fillStyle = primaryColor;
    // ctx.font = "bold 1em " + fontFamily;
    // currentSegment = segments[i];

    // isStarted &&
    //   ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
  };
  const clear = () => {
    const ctx = canvasContext;
    ctx.clearRect(0, 0, 350, 300);
  };
  return (
    <WeelStyled id="wheel">
      <div className="text-title">Quay là trúng</div>
      <canvas
        id="canvas"
        height={300}
        style={{
          pointerEvents: isFinished && isOnlyOnce ? "none" : "auto",
        }}
      />
    </WeelStyled>
  );
};
export default WheelComponent;
const WeelStyled = styled.div`
  position: relative;
  .text-title {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    max-width: 200px;
    width: 100%;
    margin: auto;
    height: 70px;
    background: #ccc;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -40px;
    z-index: 99;
    position: relative;
  }
  .option {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 5px;
  }
`;
