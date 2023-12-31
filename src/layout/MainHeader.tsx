import styled from "styled-components";
import money from "assets/image/money.png";
import dollar from "assets/image/dollar.png";
import plus from "assets/mipmap-xxxhdpi-v4/home_add_icon.png";
import { useFnOpen } from "hooks/useOpen";
import { TYPE_MODAL } from "contants";
import Avatar from "components/elements/Avatar";
import withdraw from "assets/mipmap-xxxhdpi-v4/home_tx_icon.png";
import { useAppSelector } from "store";
import { formatNumber } from "utils/formatValue";
const MainHeader = () => {
  const { onOpen } = useFnOpen();
  const { user } = useAppSelector((state) => state.user);

  return (
    <MainHeaderStyle>
      <div className="header">
        <div className="left">
          <div>
            <Avatar
              onHandle={() =>
                onOpen({
                  type: TYPE_MODAL.PROFILE,
                  value: true,
                })
              }
            />
          </div>
          <div className="money">
            {formatNumber(user?.money_balance || 0)}
            <div className="icon">
              <img src={money} alt="" />
            </div>
            <div
              className="plus"
              onClick={() =>
                onOpen({
                  type: TYPE_MODAL.WITHDRAW,
                  value: true,
                })
              }
            >
              <img src={withdraw} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="coin">
            {formatNumber(user?.gold_balance || 0)}
            <div className="dollar">
              <img src={dollar} alt="" />
            </div>
            <div
              className="plus"
              onClick={() =>
                onOpen({
                  type: TYPE_MODAL.DEPOSIT,
                  value: true,
                })
              }
            >
              <img src={plus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </MainHeaderStyle>
  );
};

export default MainHeader;
const MainHeaderStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    .left {
      display: flex;
      gap: 15px;
      align-items: center;
      .money {
        width: 120px;
        height: 30px;
        background: #000;
        opacity: 0.7;
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 700;
        position: relative;
        .plus {
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 32px;
            height: 32px;
          }
        }
        .icon {
          position: absolute;
          left: -15px;
          top: -5px;
          img {
            width: 40px;
          }
        }
      }
    }
    .right {
      .coin {
        width: 120px;
        height: 30px;
        background: #000;
        opacity: 0.7;
        border-radius: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 700;
        position: relative;
        .dollar {
          position: absolute;
          left: -15px;
          top: -5px;
          img {
            width: 40px;
          }
        }
        .plus {
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
`;
