import { Button, Modal } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import money from "assets/image/money.png";
import { styled } from "styled-components";

const ModalWithDraw = () => {
  const isModalOpen = useOpen(IS_OPEN.WITHDRAW);
  const { onOpen } = useFnOpen();
  return (
    <ModalWithDrawStyled
      centered
      open={isModalOpen}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.WITHDRAW,
          value: false,
        })
      }
      footer={null}
    >
      <div className="box-balance">
        <div className="text-balance">Số dư của tôi</div>
        <div className="money">
          <div className="icon">
            <img src={money} alt="" />
          </div>
          8k
        </div>
        <div className="balance-withdraw">
          <div className="text-1">Rút tiền (1000 điểm)</div>
          <div className="balance">1000đ</div>
          <div className="text-des">
            Số điểm hoạt động hiện tại của bạn là 1000đ với tỉ lệ rút tiền 1:1
            <span> Tăng điểm</span>
          </div>
        </div>
        <div className="withdrawal-method">Phương thức rút tiền</div>
      </div>
      <div className="flex justify-center">
        <Button className="btn-withdraw">Rút tất cả</Button>
      </div>
      <div className="policy-withdraw">
        <div>Quy tắc rút tiền</div>
        <div>
          <ul>
            <li>
              1. Tất cả số lần rút tiền sẽ khấu trừ tất cả số dư và chuyển số
              tiền rút vào tài khoản của bạn
            </li>
            <li>
              2. Thời gian rút tiền từ 5phút đến 24 giờ. Nếu có vấn đề về rút
              tiền bạn vui lòng liên hệ với CSKH
            </li>
            <li>3. Bạn được rút tối đa 1 lần/ngày</li>
            <li>4. Số tiền rút tối thiểu là 10.000 đ</li>
          </ul>
        </div>
      </div>
    </ModalWithDrawStyled>
  );
};

export default ModalWithDraw;

const ModalWithDrawStyled = styled(Modal)`
  width: 100%;
  min-height: 100vh;
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
    .ant-btn {
      margin-top: -40px;
      &.btn-withdraw {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 175px;
        height: 40px;
        width: 100%;
        border-radius: 30px;
        color: #fff;
        text-shadow: 0 1px 3px #000;
        text-align: center;
        background: radial-gradient(circle, #ffc000, #ffc000);
        border-top: 4px ridge #fff;
        border-left: 4px groove #fff;
        border-right: 4px ridge #fff;
        border-bottom: 4px groove #fff;
        box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
        &:focus {
          border-top: 4px ridge #fff;
          border-left: 4px groove #fff;
          border-right: 4px ridge #fff;
          border-bottom: 4px groove #fff;
          box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
        }
        &:active {
          border-top: 4px ridge #fff;
          border-left: 4px groove #fff;
          border-right: 4px ridge #fff;
          border-bottom: 4px groove #fff;
          box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
        }
      }
    }
    .policy-withdraw {
      margin-top: 30px;
    }
    .box-balance,
    .policy-withdraw {
      min-height: 150px;
      padding: 10px 20px 50px 20px;
      background: #f4dede;
      border-radius: 15px;
      border: 5px solid #45869b;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
      box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
      position: relative;
      .withdrawal-method {
        background: #d1d776;
        width: 100%;
        border-radius: 10px;
        border: 2px solid #bbb807;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        color: #ba5c09;
        font-weight: 700;
      }
      .balance-withdraw {
        min-height: 50px;
        background: #cbf4f6;
        border-radius: 15px;
        border: 1px solid #45869b;
        padding: 10px;
        margin-bottom: 10px;
        .text-1 {
          text-align: center;
          font-weight: 500;
        }
        .balance {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          color: #d84040;
        }
        .text-des {
          font-size: 12px;
          font-weight: 500;
          color: #0a485d;
          border: 1px dashed #134150;
          border-radius: 10px;
          padding: 10px;
          span {
            color: #d84040;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
      .text-balance {
        font-size: 18px;
        font-weight: 500;
      }
      .money {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        font-size: 20px;
        color: #d84040;
        img {
          width: 30px;
        }
      }
    }
  }
`;
