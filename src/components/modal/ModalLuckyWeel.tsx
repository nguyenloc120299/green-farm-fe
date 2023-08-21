import { Modal } from "antd";
import WheelComponent from "components/objects/WeelComponent";
import { IS_OPEN } from "contants";
import { useFnOpen, useOpen } from "hooks/useOpen";

import { styled } from "styled-components";

const ModalLuckyWeel = () => {
  const segments = ["🍊", "🍏", "🍈", "🎰", "🔔", "💥"];
  const segColors = [
    "#a49e9e",
    "#c5a275",
    "#a49e9e",
    "#c5a275",
    "#a49e9e",
    "#c5a275",
  ];
  const onFinished = (winner: any) => {
    console.log(winner);
  };
  const isModalOpen = useOpen(IS_OPEN.LUCKYWEEL);
  const { onOpen } = useFnOpen();

  return (
    <ModalLuckyWeelStyled
      centered
      open={isModalOpen}
      footer={null}
      width={350}
      onCancel={() =>
        onOpen({
          type: IS_OPEN.LUCKYWEEL,
          value: false,
        })
      }>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner: any) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Quay"
        isOnlyOnce={false}
        size={120}
        upDuration={500}
        downDuration={600}
        fontFamily=""
        winningSegment={"Thắng 10"}
      />
    </ModalLuckyWeelStyled>
  );
};

export default ModalLuckyWeel;

const ModalLuckyWeelStyled = styled(Modal)`
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
    background-color: #c5a275;
    padding: 50px 20px;
  }
`;
