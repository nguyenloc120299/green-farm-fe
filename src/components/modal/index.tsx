import React from "react";
import ModalGames from "./ModalGames";
import ModalMission from "./ModalMission";
import ModalProfile from "./ModalProfile";
import ModalReferral from "./ModalReferral";

const Modals = () => {
  return(
    <>
        <ModalMission/>
        <ModalReferral/>
        <ModalGames/>
        <ModalProfile/>
    </>
  )
};

export default Modals;
