import { Button, List, Modal } from "antd";
import Avatar from "components/elements/Avatar";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import money from "assets/image/money.png";
import dollar from "assets/image/dollar.png";
import friendly from "assets/image/friendly.png";
import setting from "assets/image/gear.png";
import custom_service from "assets/image/customer-service.png";
import about from "assets/image/info.png";
import styled from "styled-components";
import ButtonCustom from "components/elements/Button";
import { RightOutlined } from "@ant-design/icons";

const ModalProfile = () => {
  const isModalOpen = useOpen(IS_OPEN.PROFILE);
  const { onOpen } = useFnOpen();
  return (
    <ModalProfileStyled
      centered
      open={isModalOpen}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.PROFILE,
          value: false,
        })
      }
      footer={null}
    >
      <div className="info-user">
        <Avatar />
        <div>
          <div className="name">Loc Nguyen</div>
          <div className="id_user">Id: 5803163</div>
        </div>
      </div>

      <div className="box-money">
        <div className="money">
          <div className="icon">
            <img src={money} alt="" />
          </div>
          8k
        </div>
        <div className="coin">
          590
          <div className="icon">
            <img src={dollar} />
          </div>
        </div>
      </div>
      <div className="box-money">
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={money} />}
              title={"Chi tiết số dư"}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={dollar} />}
              title={"Chi tiết tiền vàng"}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={friendly} />}
              title={"Lời mời của tôi"}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={custom_service} />}
              title={"Liên hệ CSKH"}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={setting} />}
              title={"Cài đặt ngôn ngữ"}
            />
            <RightOutlined />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<img src={about} />}
              title={"Về chúng tôi"}
            />
            <RightOutlined />
          </List.Item>
        </List>
      </div>
      <div className="flex justify-center">
        <ButtonCustom
          width={100}
          onEvent={() =>
            onOpen({
              type: IS_OPEN.WITHDRAW,
              value: true,
            })
          }
        >
          Rút tiền
        </ButtonCustom>
      </div>
    </ModalProfileStyled>
  );
};

export default ModalProfile;

const ModalProfileStyled = styled(Modal)`
  width: 100%;
  height: 100vh;
  max-width: 100%;

  .ant-modal-close {
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    span {
      font-size: 18px;
      color: #aaa;
      font-weight: 700;
    }
  }
  .ant-modal-content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: #9fd7ec;
    padding: 50px 20px;
    .info-user {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      .name {
        font-size: 24px;
        font-weight: 700;
        color: #0f6481;
      }
      .id_user {
        font-size: 14px;
        color: #1e556a;
        font-weight: 700;
      }
    }
    .box-money {
      min-height: 80px;
      background: #f4dede;
      border-radius: 15px;
      border: 5px solid #45869b;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 15px;
      box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
      position: relative;
      .ant-list {
        flex: 1;
        padding: 10px 20px;
        .ant-list-item-meta {
          align-items: center;
          img {
            width: 32px;
          }
        }
      }
      .money,
      .coin {
        display: flex;
        gap: 10px;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        .icon {
          img {
            width: 40px;
          }
        }
      }
    }
    .ant-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 150px;
      width: 100%;
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
        color: #ffc000;
      }
      &:active {
        border-top: 4px ridge #ffb000;
        border-left: 4px groove #ffb000;
        border-right: 4px ridge #ffb000;
        border-bottom: 4px groove #ffb000;
        box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
        color: #ffc000;
      }
    }
  }
`;
