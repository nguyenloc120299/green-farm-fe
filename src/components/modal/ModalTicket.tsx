import { Modal } from "antd";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";
import React from "react";
import { styled } from "styled-components";

const ModalTicket = () => {
  const isModalOpen = useOpen(IS_OPEN.TICKETS);
  const { onOpen } = useFnOpen();
  return (
    <ModalTicketStyled
      onCancel={() =>
        onOpen({
          type: IS_OPEN.TICKETS,
          value: false,
        })
      }
      open={isModalOpen}
      width={300}
      centered
      footer={null}
    >
      ModalTicket
    </ModalTicketStyled>
  );
};

export default ModalTicket;

const ModalTicketStyled = styled(Modal)`
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
    background-color: transparent;
    padding: 50px 20px;
    box-shadow: none;
  }
`;
