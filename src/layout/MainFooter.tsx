import React from "react";
import styled from "styled-components";
import minigame from "assets/image/joystick.png";
import mision from "assets/image/target.png";
import man from "assets/image/man.png";
import mail from "assets/image/mailbox.png";
import { useFnOpen } from "hooks/useOpen";
import { IS_OPEN } from "contants";
const MainFooter = () => {
  const { onOpen } = useFnOpen();
  return (
    <MainFooterStyle>
      <div className="footer">
        <div className="box">
          <div>
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
          <div>
            <img src={mision} />
            <div className="text">Nhiệm vụ</div>
          </div>
        </div>
        <div className="box">
          <div>
            <img src={man} />
            <div className="text">Mời bạn bè</div>
          </div>
        </div>
        <div className="box">
          <div>
            <img src={mail} />
            <div className="text">Thông báo</div>
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
      width: 70px;
      height: 60px;
      border-radius: 10px;
      background: #c5a275;
      box-shadow: 2px 3px 0 0 #bbb;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: 10px;
        font-weight: 700;
      }
    }
  }
`;
