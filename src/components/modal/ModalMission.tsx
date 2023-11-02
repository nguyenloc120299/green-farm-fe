import { Progress } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import bg_claim from "assets/mipmap-xxxhdpi-v4/time_reward_btn_sel.png";
import logo_bg from "assets/mipmap-xxxhdpi-v4/unlock_people_bg.png";
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
      <BodyStyled className="body" bgLogo={logo_bg} bgClaim={bg_claim}>
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
              <img src={bg_claim} />
              <div className="text-title">
                <h4>Nhận</h4>
              </div>
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
              <img src={bg_claim} />
              <div className="text-title">
                <h4>Nhận</h4>
              </div>
            </div>
          </div>
        </div>
      </BodyStyled>
    </ModalBase>
  );
};

export default ModalMission;
const BodyStyled: any = styled.div`
  &.body {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    h4 {
      text-align: center;
      margin: 10px 0;
      color: #04155f;
    }
    .list {
      display: flex;
      flex-direction: column;
      .item {
        height: 70px;
        background-color: #84c3e7;
        box-shadow: 4px 4px 0 #ccc;
        border-radius: 10px;
        margin-bottom: 7px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
          width: 50px;
          height: 50px;
          background: url(${(props: any) => props.bgLogo}) no-repeat;
          background-position: center;
          background-size: cover;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            object-fit: cover;
          }
        }
        .claim {
          width: 70px;
          height: 30px;
          position: relative;
          .text-title {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            h4 {
              font-size: 14px;
              font-weight: 700;
              color: #fff;
            }
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .progress {
          flex: 1;
          margin: 0 15px;
          .name-mission {
            text-align: center;
            color: #04155f;
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
`;
