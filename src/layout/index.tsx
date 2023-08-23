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
import { Button } from "antd";
const Layout = () => {
  const height = useContentResizer();
  const isOpen = useOpen(IS_OPEN.SEEDS);
  const isLogin = false;
  return (
    <LayoutStyle bg={bg} height={height}>
      <Modals />
      {isLogin ? (
        <div className="main-page">
          {isOpen && <SeedsBox />}
          <MainHeader />
          <div className="farm">
            <Outlet />
          </div>
          <MainFooter />
        </div>
      ) : (
        <div className="main-page">
          <div className="login-page">
            <div className="form">
              <div className="options">
                <Button>Đăng nhập</Button>
                <Button>Đăng kí</Button>
              </div>
            </div>
          </div>
        </div>
      )}
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
  overflow: hidden;
  .main-page {
    max-width: 478px;
    width: 100%;
    height: 100%;
    width: 100%;
    background: url(${(props: any) => props.bg});
    background-position: center;
    background-size: cover;
    position: relative;
    .login-page {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .form {
        max-width: 300px;
        margin: auto;
        width: 100%;
        border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAACVBMVEUAAAAYFCXupGhEFGpVAAAAAXRSTlMAQObYZgAAABpJREFUCNdjYA1lYJBa5cCQwDABGwbJgdQAAKX2CF37xkC2AAAAAElFTkSuQmCC)
          20% / 1 / 0 stretch;
        border-style: solid;
        border-width: 5.25px;
        image-rendering: pixelated;
        border-radius: 15px;
        padding: 2.625px;
        background-color: rgb(185, 111, 80);
        padding: 25px 10px;
        .options {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .ant-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 30px;
            width: 100%;
            font-size: 16px;
            font-weight: 700;
            height: 50px;
            color: #ffc000;
            text-shadow: 0 1px 3px #000;
            text-align: center;
            background: radial-gradient(circle, #078c33, #078c33);
            border-top: 4px ridge #ffb000;
            border-left: 4px groove #ffb000;
            border-right: 4px ridge #ffb000;
            border-bottom: 4px groove #ffb000;
            box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
          }
        }
      }
    }
    @media (max-width: 478px) {
      height: ${(props: any) => props.height}px;
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
