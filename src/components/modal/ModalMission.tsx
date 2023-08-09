import { Button, Modal, Progress } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import React from "react";
import { useAppDispatch } from "store";
import styled from "styled-components";
import sickle from "assets/icon/sickle.png";
const ModalMission = () => {
  const isModalOpen = useOpen(IS_OPEN.MISSION);
  const { onOpen } = useFnOpen();
  return (
    <ModalMissionStyled
      centered
      open={isModalOpen}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.MISSION,
          value: false,
        })
      }
      footer={null}
      width={350}
    >
      <div className="header">Nhiệm vụ mỗi ngày</div>
      <div className="body">
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
      </div>
    </ModalMissionStyled>
  );
};

export default ModalMission;
const ModalMissionStyled = styled(Modal)`
  .ant-modal-close {
    top: -5px;
    right: -5px;
    background: #71b5dc;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 3px #222;
    span {
      font-size: 14px;
      color: #fff;
      font-weight: 700;
    }
  }
  .ant-modal-content {
    background-color: #84c3e7;
    position: relative;
    padding: 12px;
    .header {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%);
      width: 200px;
      border-radius: 15px 15px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      background: #84c3e7;
      font-size: 16px;
      font-weight: 700;
    }
    .body {
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
            background: #078c33;
            border-radius: 30px;
            color: #fff;
            &:focus {
              border: unset;
              box-shadow: unset;
            }
          }
          /* &:hover {
            background-color: #f3ce3a;
          } */
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
              font-weight: 700;
            }
            .ant-progress-bg {
              background: #dfb615;
            }
          }
        }
      }
    }
  }
`;
