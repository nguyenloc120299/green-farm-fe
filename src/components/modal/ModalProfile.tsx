import { Modal } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import React from "react";
import styled from "styled-components";

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
      <div>
        
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
      font-size: 14px;
      color: #aaa;
      font-weight: 700;
    }
  }
  .ant-modal-content {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: #36b2df;
    padding: 0;
  }
`;
