import { Outlet } from "react-router-dom";
import styled from "styled-components";
import bg from "assets/bg/bg-main.jpg";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import useContentResizer from "hooks/useContentResizer";
import SeedsBox from "components/ui/SeedsBox";
import Modals from "components/modal";
import LoginMain from "components/ui/LoginMain";
import Loading from "components/elements/Loading";
import BoxNotification from "components/elements/BoxNotification";
import { useAppSelector } from "store";
import { getAuhorization } from "api/core";
import { useEffect } from "react";
import LoadingScreen from "components/elements/LoadingScreen";
import useDevice from "hooks/useDevice";
import useApiUser from "api/hook/useApiUser";
import { useFnLoading } from "hooks/useLoading";
import { TYPE_LOADING } from "contants";
const Layout = () => {
  useDevice();
  const height = useContentResizer();
  const isLogin = useAppSelector((state) => state.app.isLogin);
  const accessToken = getAuhorization().accessToken;
  const { user } = useAppSelector((state) => state.user);
  const { fetchUser } = useApiUser();
  const { onLoading } = useFnLoading();
  useEffect(() => {
    if (accessToken && !user) {
      fetchUser();
    } else {
      onLoading({
        type: TYPE_LOADING.LOAD_SCREEN,
        value: false,
      });
    }
  }, []);

  return (
    <LayoutStyle bg={bg} height={height}>
      <LoadingScreen />
      <Modals />
      <BoxNotification />
      <Loading />
      <div className="main-page">
        {isLogin ? (
          <>
            <SeedsBox />
            <MainHeader />
            <div className="farm">
              <Outlet />
            </div>
            <MainFooter />
          </>
        ) : (
          <LoginMain />
        )}
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
  overflow: hidden;
  .main-page {
    max-width: 478px;
    height: ${(props: any) => props?.height}px;
    width: 100%;
    background: url(${(props: any) => props.bg});
    background-position: center;
    background-size: cover;
    position: relative;

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
