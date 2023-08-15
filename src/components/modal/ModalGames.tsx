import { Button } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import React from "react";
import styled from "styled-components";
import ModalBase from "./ModalBaseCustom";
import loteryIcon from "assets/games/lottery.png";
import fortuneWheel from "assets/games/fortune-wheel.png";
import trophy from "assets/games/trophy.png";
const ModalGames = () => {
  const isModalOpen = useOpen(IS_OPEN.GAMES);
  const { onOpen } = useFnOpen();
  return (
    <ModalBase
      onCancel={() =>
        onOpen({
          type: IS_OPEN.GAMES,
          value: false,
        })
      }
      isModalOpen={isModalOpen}
      titleHeader="Danh sách trò chơi"
    >
      <BodyStyled className="body">
        <div className="list">
          <div className="item">
            <div className="logo">
              <img src={loteryIcon} alt="loteryIcon" />
            </div>
            <div className="des-games">Tham gia mua vé sổ xố thần tài</div>
            <div className="play-game">
              <Button>Chơi </Button>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img src={fortuneWheel} alt="loteryIcon" />
            </div>
            <div className="des-games">Tham gia vòng xoay may mắn</div>
            <div className="play-game">
              <Button>Chơi</Button>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img src={trophy} alt="loteryIcon" />
            </div>
            <div className="des-games">
              Tham gia cuộc đua của những loài thú
            </div>
            <div className="play-game">
              <Button>Chơi </Button>
            </div>
          </div>
        </div>
      </BodyStyled>
    </ModalBase>
  );
};

export default ModalGames;
const BodyStyled = styled.div`
  &.body {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    .list {
      display: flex;
      flex-direction: column;
      .item {
        height: 70px;
        background-color: #84c3e7;
        border-radius: 10px;
        margin-bottom: 7px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 32px;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .des-games {
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          max-width: 150px;
        }

        .play-game {
          .ant-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 100px;
            border-radius: 30px;
            color: #ffc000;
            text-shadow: 0 1px 3px #000;
            text-align: center;
            background: radial-gradient(circle, #078c33, #078c33);
            border-top: 4px ridge #ffb000;
            border-left: 4px groove #ffb000;
            border-right: 4px ridge #ffb000;
            border-bottom: 4px groove #ffb000;
            box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
            &:focus {
              border-top: 4px ridge #ffb000;
              border-left: 4px groove #ffb000;
              border-right: 4px ridge #ffb000;
              border-bottom: 4px groove #ffb000;
              box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
            }
            &:active {
              border-top: 4px ridge #ffb000;
              border-left: 4px groove #ffb000;
              border-right: 4px ridge #ffb000;
              border-bottom: 4px groove #ffb000;
              box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
            }
          }
        }
      }
    }
  }
`;
