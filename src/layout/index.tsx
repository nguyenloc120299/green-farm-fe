import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import bg from "assets/bg/bg-main.jpg";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
const Layout = () => {
  return (
    <LayoutStyle bg={bg}>
      <div className="main-page">
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
