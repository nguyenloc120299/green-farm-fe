import { Button, Modal } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";

import React from "react";
import styled from "styled-components";
import bannerTop from "assets/bg/1.png";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const ModalReferral = () => {
  const isModalOpen = useOpen(IS_OPEN.REFERRAL);
  const { onOpen } = useFnOpen();
  return (
    <ModalReferralStyled
      centered
      open={isModalOpen}
      width={350}
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="text1">Lời mời của tôi</div>
            <div>
              <ExclamationCircleOutlined />
            </div>
          </div>
          <div>
            <div className="text-center">Số dư hiện tại </div>
            <h4>14k</h4>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <div>Tổng thu nhập tích lũy</div>
              <div>0đ</div>
            </div>
            <div className="flex justify-between mb-1">
              <div>Tổng thu nhập hôm nay</div>
              <div>0đ</div>
            </div>
            <div className="flex justify-between mb-1">
              <div>Tổng người mời</div>
              <div>100</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button className="claim">Rút tiền</Button>
          </div>
        </div>
        {/* <div className="box">
          
        </div> */}
      </div>
    </ModalReferralStyled>
  );
};

export default ModalReferral;

const ModalReferralStyled = styled(Modal)`
  .ant-modal-close {
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    span {
      font-size: 14px;
      color: #aaa;
      font-weight: 700;
    }
  }
  .ant-modal-content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: transparent;
    box-shadow: unset;
    border-radius: 20px;
    padding: 10px;
    .header {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .body {
      display: flex;
      flex-direction: column;

      .text1 {
        font-size: 16px;
        font-weight: 500;
      }
      .box {
        min-height: 50px;
        background: #c5a275;
        margin: 5px 0;
        border-radius: 10px;
        padding: 15px 25px;
        h4 {
          text-align: center;
          margin: 0;
          font-size: 18px;
          color: #d13e39;
          font-weight: 700;
        }
        .ant-btn.claim {
          border-radius: 20px;
          background: #d8c625;
          color: #fff;
          font-weight: 700;
          min-width: 200px;
        }
      }
    }
  }
`;
