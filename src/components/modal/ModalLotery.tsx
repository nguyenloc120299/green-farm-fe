import { Button, Modal } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import close from 'assets/mipmap-xxxhdpi-v4/home_dialog_close.png'
import thantai from "assets/image/thantai.png";
import { styled } from "styled-components";

const ModalLotery = () => {
  const isModalOpen = useOpen(IS_OPEN.LOTTERY);
  const { onOpen } = useFnOpen();
  return (
    <ModalLoteryStyled
      open={isModalOpen}
      centered
      footer={null}
      width={300}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.LOTTERY,
          value: false,
        })
      }
    >
      <div className="img-thantai">
        <img src={thantai} />
      </div>
      <div>
        <div className="title-reward">Tổng giải thưởng 100.000 đ</div>
        <div
          className="flex justify-center row-time-lotery items-center"
          style={{ color: "#fff", fontWeight: "700" }}
        >
          <div className="time">04</div>:<div className="time">00</div>:
          <div className="time">00</div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="reward-text">Kết quả lần trước</div>
            <div className="reward-number">96</div>
          </div>
        </div>
        <div className="flex justify-center ">
          <Button
            className="btn-buy-ticket"
            onClick={() =>
              onOpen({
                type: IS_OPEN.TICKETS,
                value: true,
              })
            }
          >
            Mua vé
          </Button>
        </div>
      </div>
    </ModalLoteryStyled>
  );
};

export default ModalLotery;
const ModalLoteryStyled = styled(Modal)`
    .ant-modal-close {
    top: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: url(${close});
    background-size: 100%;
    span {
      display: none;
    }
  }

  .ant-modal-content {
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 50px 20px;
    box-shadow: none;
    .img-thantai {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .row-time-lotery {
      gap: 5px;
      .time {
        width: 50px;
        height: 50px;
        background: #ffc000;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        text-transform: 0 0 10px #000;
        box-shadow: 0 0 3px #aaa;
      }
    }
    .title-reward {
      color: #ffc000;
      text-align: center;
      margin-top: -40px;
      font-weight: 700;
      font-size: 20px;
      text-shadow: 0 0 5px #000;
    }
    .reward-text {
      text-align: center;
      font-size: 20px;
      color: #fff;
      font-weight: 700;
      margin-top: 10px;
    }
    .reward-number {
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #ffb000;
      text-shadow: 0 0 10px #000;
    }
    .ant-btn {
      margin-top: 20px;
      &.btn-buy-ticket {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 270px;
        width: 100%;
        margin-top: 10px;
        padding: 15px 20px;
        font-weight: 700;
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
      }
    }
  }
`;
