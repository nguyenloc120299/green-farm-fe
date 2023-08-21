import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import bg from "assets/bg/bg-main.jpg";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import useContentResizer from "hooks/useContentResizer";
import SeedsBox from "components/ui/SeedsBox";
import { useOpen } from "hooks/useOpen";
import { IS_OPEN } from "contants";
import Modals from "components/modal";
const Layout = () => {
  const height = useContentResizer();
  const isOpen = useOpen(IS_OPEN.SEEDS);


  return (
    <LayoutStyle bg={bg} height={height}>
      <Modals/>
      <div className="main-page">
        {isOpen && <SeedsBox />}
        <MainHeader />
        <div className="farm">
          <Outlet />
        </div>
        <MainFooter />
      </div>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle: any = styled.div`
  width: 100%;
  height: ${(props: any) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .main-page {
    max-width: 478px;
    width: 100%;
    height: 768px;
    width: 100%;
    background: url(${(props: any) => props.bg});
    background-position: center;
    background-size: cover;
    position: relative;
    @media (max-width: 478px) {
      height: 100%;
    }
    .farm {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(20, 1fr);
      grid-auto-rows: 1fr;
      height: 100%;
      overflow-y: clip;
    }
  }
`;
