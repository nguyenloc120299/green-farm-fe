import { Button, Modal, Progress } from "antd";
// import { IS_OPEN } from "contants";
// import { useFnOpen, useOpen } from "hooks/useOpen";
import { ReactNode } from "react";
import styled from "styled-components";

interface Type_Props {
  isModalOpen: boolean;
  onOpen?: () => void;
onCancel: () => void;
  children?: ReactNode;
  titleHeader: string;
}

const ModalBase = ({
  isModalOpen,
  onCancel,
  children,
  titleHeader,
}: Type_Props) => {
  return (
    <ModalMissionStyled
      centered
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
      width={375}
    >
      <div className="header">{titleHeader}</div>
      {children}
    </ModalMissionStyled>
  );
};

export default ModalBase;
const ModalMissionStyled = styled(Modal)`
  .ant-modal-close {
    top: -5px;
    right: -5px;
    background: #71b5dc;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 3px #222;
    span {
      font-size: 14px;
      color: #fff;
      font-weight: 700;
    }
  }
  .ant-modal-content {
    background-color: #84c3e7;
    position: relative;
    padding: 12px;
    border-radius: 10px;
    .header {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%);
      width: 200px;
      border-radius: 15px 15px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      background: #84c3e7;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
