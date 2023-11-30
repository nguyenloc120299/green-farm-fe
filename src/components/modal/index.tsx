import React from "react";
import ModalGames from "./ModalGames";
import ModalMission from "./ModalMission";
import ModalProfile from "./ModalProfile";
import ModalReferral from "./ModalReferral";
import ModalWithDraw from "./ModalWithDraw";
import ModalLuckyWeel from "./ModalLuckyWeel";
import ModalLotery from "./ModalLotery";
import ModalTicket from "./ModalTicket";
import ModalDeposit from "./ModalDeposit";
import ModalRanking from "./ModalRanking";
import ModalUnlockLand from "./ModalUnlockLand";

const Modals = () => {
  return (
    <>
      <ModalMission />
      <ModalReferral />
      <ModalGames />
      <ModalProfile />
      <ModalWithDraw />
      <ModalLuckyWeel />
      <ModalLotery />
      <ModalTicket />
      <ModalDeposit />
      <ModalRanking />
      <ModalUnlockLand />
    </>
  );
};

export default Modals;
