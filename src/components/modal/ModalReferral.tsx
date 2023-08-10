import { Button, Modal } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";

import React from "react";
import styled from "styled-components";
import bannerTop from "assets/bg/bg1.jpg";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const ModalReferral = () => {
  const isModalOpen = useOpen(IS_OPEN.REFERRAL);
  const { onOpen } = useFnOpen();
  return (
    <ModalReferralStyled
      centered
      open={isModalOpen}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.REFERRAL,
          value: false,
        })
      }
      footer={null}
    >
      <div className="header">
        <img src={bannerTop} />
      </div>
      <div className="body">
        <div className="box">
          <div style={{display:'flex',justifyContent:"space-between"}}>
            <div>Lời mời của tôi</div>
            <div>
              <ExclamationCircleOutlined/>
            </div>
          </div>
          <div>
            <h4>14k</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button className="claim">Rút tiền</Button>
          </div>
        </div>
        <div className="box"></div>
      </div>
    </ModalReferralStyled>
  );
};

export default ModalReferral;

const ModalReferralStyled = styled(Modal)`
  width: 100%;
  height: 100vh;
  max-width: 100%;
  .ant-modal-close {
    top: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
    span {
      font-size: 14px;
      color: #fff;
      font-weight: 700;
    }
  }
  .ant-modal-content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: #078c33;
    padding: 0;
    .header {
      height: 120px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      padding: 10px 15px;
      .box {
        min-height: 50px;
        background: #c5a275;
        margin: 5px 0;
        border-radius: 10px;
        padding: 10px;
        h4 {
          text-align: center;
          margin: 0;
          font-size: 18px;
          color: #d13e39;
          font-weight: 700;
        }
        .ant-btn.claim {
          border-radius: 20px;
          background: #c7a23c;
          color: #fff;
          font-weight: 700;
          min-width: 200px;
        }
      }
    }
  }
`;
