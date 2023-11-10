import React from "react";
import styled from "styled-components";
import minigame from "assets/image/joystick.png";
import mision from "assets/image/target.png";
import man from "assets/image/man.png";
import rank from "assets/image/ranking.png";
import { useFnOpen } from "hooks/useOpen";
import { IS_OPEN } from "contants";
import { ColorConstants } from "globalStyles/color";
const MainFooter = () => {
  const { onOpen } = useFnOpen();
  return (
    <MainFooterStyle>
      <div className="footer">
        <div
          className="box"
          onClick={() =>
            onOpen({
              type: IS_OPEN.GAMES,
              value: true,
            })
          }
        >
          <div className="col">
            <img src={minigame} />
            <div className="text">Khu trò chơi</div>
          </div>
        </div>
        <div
          className="box"
          onClick={() =>
            onOpen({
              type: IS_OPEN.MISSION,
              value: true,
            })
          }
        >
          <div className="col">
            <img src={mision} />
            <div className="text">Nhiệm vụ</div>
          </div>
        </div>
        <div
          className="box"
          onClick={() =>
            onOpen({
              type: IS_OPEN.REFERRAL,
              value: true,
            })
          }
        >
          <div className="col">
            <img src={man} />
            <div className="text">Mời bạn bè</div>
          </div>
        </div>
        <div className="box">
          <div className="col">
            <img src={rank} />
            <div className="text">Xếp hạng</div>
          </div>
        </div>
      </div>
    </MainFooterStyle>
  );
};

export default MainFooter;

const MainFooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
  .footer {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box {
      max-width: 80px;
      width: 100%;
      height: 60px;
      border-radius: 10px;
      background: ${ColorConstants.bg_main_1};
      box-shadow: 4px 5px 0 0 ${ColorConstants.shadow_main_1};
      display: flex;
      justify-content: center;
      align-items: center;
      .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        img {
          width: 25px;
          object-fit: cover;
        }
        .text {
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
  }
`;
