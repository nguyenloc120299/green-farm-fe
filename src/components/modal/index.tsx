import React from "react";
import ModalGames from "./ModalGames";
import ModalMission from "./ModalMission";
import ModalProfile from "./ModalProfile";
import ModalReferral from "./ModalReferral";
import ModalWithDraw from "./ModalWithDraw";
import ModalLuckyWeel from "./ModalLuckyWeel";
import ModalLotery from "./ModalLotery";

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
    </>
  );
};

export default Modals;
