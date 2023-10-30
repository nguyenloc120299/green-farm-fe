import { Button, Modal, Progress } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import React from "react";
import styled from "styled-components";
import sickle from "assets/icon/sickle.png";
import ModalBase from "./ModalBaseCustom";
const ModalMission = () => {
  const isModalOpen = useOpen(IS_OPEN.MISSION);
  const { onOpen } = useFnOpen();
  return (
    <ModalBase
      onCancel={() =>
        onOpen({
          type: IS_OPEN.MISSION,
          value: false,
        })
      }
      isModalOpen={isModalOpen}
      titleHeader="Nhiệm vụ mỗi ngày"
    >
      <BodyStyled className="body">
        <h4>
          Nhiệm vụ được làm mới mỗi ngày
          <br />
          Hãy nhớ nhận phần thưởng
        </h4>
        <div className="list">
          <div className="item">
            <div className="logo">
              <img src={sickle} alt="" />
            </div>
            <div className="progress">
              <div className="name-mission">Thu hoạch mỗi ngày</div>
              <Progress percent={30} size="default" />
            </div>
            <div className="claim">
              <Button>Nhận</Button>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img src={sickle} alt="" />
            </div>
            <div className="progress">
              <div className="name-mission">Thu hoạch mỗi ngày</div>
              <Progress percent={30} size="default" />
            </div>
            <div className="claim">
              <Button>Nhận</Button>
            </div>
          </div>
        </div>
      </BodyStyled>
    </ModalBase>
  );
};

export default ModalMission;
const BodyStyled = styled.div`
  &.body {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    h4 {
      text-align: center;
      margin: 10px 0;
    }
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
        .logo {
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            object-fit: cover;
          }
        }
        .progress {
          flex: 1;
          margin: 0 15px;
          .name-mission {
            text-align: center;
            font-size: 14px;
            font-weight: 500;
          }
          .ant-progress-bg {
            background: #dfb615;
          }
        }
      }
    }
  }
`;
