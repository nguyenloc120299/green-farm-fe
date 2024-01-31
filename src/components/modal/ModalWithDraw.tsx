import { Modal } from "antd";
import { TYPE_MODAL } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import money from "assets/image/money.png";
import { styled } from "styled-components";
import close from "assets/mipmap-xxxhdpi-v4/home_dialog_close.png";
import withrawIcon from "assets/mipmap-xxxhdpi-v4/withdrawal_button_nor.png";
import withdrawTypeRight from "assets/mipmap-xxxhdpi-v4/withdrawal_type_right.png";
import { useAppSelector } from "store";
import { formatNumber } from "utils/formatValue";
import { useMemo } from "react";
const ModalWithDraw = () => {
  const isModalOpen = useOpen(TYPE_MODAL.WITHDRAW);
  const { user } = useAppSelector((state) => state.user);
  const { onOpen } = useFnOpen();

  return (
    <ModalWithDrawStyled
      centered
      open={isModalOpen}
      onCancel={() =>
        onOpen({
          type: TYPE_MODAL.WITHDRAW,
          value: false,
        })
      }
      footer={null}
      width={450}
    >
      <div className="box-balance">
        <div className="text-balance">Số dư của tôi</div>
        <div className="money">
          <div className="icon">
            <img src={money} alt="" />
          </div>
          {formatNumber(user?.money_balance || 0)}
        </div>
        <div className="balance-withdraw">
          <div className="text-1">Rút tiền ({user?.active_point} điểm)</div>
          <div className="balance">{formatNumber(user?.active_point ?? 0)}đ</div>
          <div className="text-des">
            Số điểm hoạt động hiện tại của bạn là {user?.active_point ?? 0} điểm với tỉ lệ rút tiền
            1:1
            <span> Tăng điểm</span>
          </div>
        </div>
        <div className="withdrawal-method">
          <span>Phương thức rút tiền</span>
          <div
            className="flex items-center "
            style={{
              gap: "10px",
            }}
          >
            Momo
            <img src={withdrawTypeRight} width={10} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="btn-withdraw">
          <img src={withrawIcon} />
          <div className="btn-name">
            <h3>Rút tất cả</h3>
          </div>
        </div>
      </div>
      {/* <div className="policy-withdraw">
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
            <li>
              5. Tỉ lệ rút tiền tỉ lệ 1:1 với số điểm hoạt động của bạn hiện có.
            </li>
          </ul>
        </div>
      </div> */}
    </ModalWithDrawStyled>
  );
};

export default ModalWithDraw;

const ModalWithDrawStyled = styled(Modal)`
  width: 100%;
  .ant-modal-close {
    top: 5px;
    right: 5px;
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
    border-radius: 20px;
    box-shadow: 0 0 3px 0 #000;
    background-color: #9fd7ec;
    padding: 50px 20px;
    .btn-withdraw {
      position: relative;
      margin-top: -15%;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
      .btn-name {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
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
      font-size: 16px;
      font-weight: 500;
      .withdrawal-method {
        background: #d1d776;
        width: 100%;
        border-radius: 10px;
        border: 2px solid #bbb807;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        color: #ec1b1b;
        font-weight: 700;
        img {
          width: 8px;
        }
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
          font-weight: 700;
          font-size: 20px;
        }
        .balance {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #ec1b1b;
        }
        .text-des {
          font-size: 16px;
          font-weight: 700;
          color: #0a485d;
          border: 1px dashed #134150;
          border-radius: 10px;
          padding: 10px;
          span {
            color: #ec1b1b;
            font-weight: 700;
            cursor:unset ;
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
        color: #ec1b1b;
        img {
          width: 30px;
        }
      }
    }
  }
`;
