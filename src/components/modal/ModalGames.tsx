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
              <Button>Chơi ngay</Button>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img src={fortuneWheel} alt="loteryIcon" />
            </div>
            <div className="des-games">Tham gia vòng xoay may mắn</div>
            <div className="play-game">
              <Button>Chơi ngay</Button>
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
              <Button>Chơi ngay</Button>
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
            background: #078c33;
            border-radius: 30px;
            color: #fff;
            max-width: 100px;
            width: 100%;
            &:focus {
              border: unset;
              box-shadow: unset;
            }
            &:active{
              border: unset;
              box-shadow: unset;
            }
          }
        }
      }
    }
  }
`;
